## Introduction to BaseDevice
The [`BaseDevice`](https://moxa.gitlab.io/qa/product/router/guerrilla/guerrilla/device/base.html) class is a foundational component designed to abstract the complexities involved in managing network device sessions. It serves as a superclass from which specific device types can inherit, providing a consistent interface for connecting to, disconnecting from, and executing commands on network devices.

```py
@dataclass
class BaseDevice:
    """
    Represents a base device with common functionality.

    Args:
        config (dict): The configuration settings for the device.
        session (BaseSession, optional): The session object used for communication with the device. Defaults to None.
        logger: The logger object used for logging. Defaults to logger.

    Attributes:
        name (str): The name of the device.
        session (BaseSession): The session object used for communication with the device.
    """

    config: dict
    session: BaseSession = field(init=False)
    logger = logger

    def __post_init__(self):
        """
        Initializes the device object after it has been created.
        """
        self.name = self.config.get("name", None)
        self.session = Session(config=self.config)

    def connect(self) -> None:
        """
        Connects to the device.
        """
        self.session.connect()

    def disconnect(self) -> None:
        """
        Disconnects from the device.
        """
        self.session.disconnect()

    def run(
        self,
        command: str,
        expect_string: str = None,
        read_timeout: int = 30,
        error_detector: Optional[Callable[[str], bool]] = None,
        extend_error: Union[str, List[str], None] = None,
        use_textfsm: bool = False,
        reset_prompt: bool = False,
        print_log: bool = True,
    ) -> Response:
        """
        Runs a command on the device and returns the response.

        Args:
            command (str): The command to run on the device.
            expect_string (str, optional): The expected string in the device's response. Defaults to None.
            read_timeout (int, optional): The timeout for reading the device's response. Defaults to 30.
            error_detector (Callable[[str], bool], optional): A function to detect errors in the device's response. Defaults to None.
            extend_error (str, List[str], None, optional): Additional error strings to check in the device's response. Defaults to None.
            use_textfsm (bool, optional): Whether to use TextFSM for parsing the device's response. Defaults to False.
            reset_prompt (bool, optional): Whether to reset the device's prompt after running the command. Defaults to False.
            print_log (bool, optional): Whether to print the command and response to the log. Defaults to True.

        Returns:
            Response: The response object containing the command, output, and status of the command execution.
        """
        response = Response(self.name, command, expect_string)
        output, raw_output, failed = self.session.run(
            command,
            expect_string=expect_string,
            read_timeout=read_timeout,
            error_detector=error_detector,
            extend_error=extend_error,
            use_textfsm=use_textfsm,
            reset_prompt=reset_prompt,
            print_log=print_log,
        )
        response.record_response(output, raw_output, failed)
        return response

    def run_timing(
        self,
        command: str,
        last_read: float = 2,
        read_timeout: float = 30,
        strip_prompt: bool = True,
        strip_command: bool = True,
        normalize: bool = True,
        use_textfsm: bool = False,
        textfsm_template: str | None = None,
        cmd_verify: bool = False,
    ) -> Response:
        """
        Runs a command on the device and returns the response with timing information.

        Args:
            command (str): The command to run on the device.
            last_read (float, optional): The time to wait after the last read before timing out. Defaults to 2.
            read_timeout (float, optional): The timeout for reading the device's response. Defaults to 30.
            strip_prompt (bool, optional): Whether to strip the device's prompt from the response. Defaults to True.
            strip_command (bool, optional): Whether to strip the command from the response. Defaults to True.
            normalize (bool, optional): Whether to normalize the response by removing leading/trailing whitespace. Defaults to True.
            use_textfsm (bool, optional): Whether to use TextFSM for parsing the device's response. Defaults to False.
            textfsm_template (str, None, optional): The TextFSM template to use for parsing the device's response. Defaults to None.
            cmd_verify (bool, optional): Whether to verify the command in the device's response. Defaults to False.

        Returns:
            Response: The response object containing the command, output, and status of the command execution.
        """
        response = Response(self.name, command, None)
        output, raw_output, failed = self.session.run_timing(
            command,
            last_read=last_read,
            read_timeout=read_timeout,
            strip_prompt=strip_prompt,
            strip_command=strip_command,
            normalize=normalize,
            use_textfsm=use_textfsm,
            textfsm_template=textfsm_template,
            cmd_verify=cmd_verify,
        )
        response.record_response(output, raw_output, failed)
        return response

    def find_prompt(self) -> str:
        """
        Finds the prompt of the device.

        Returns:
            str: The prompt of the device.
        """
        return self.session.find_prompt()

    @property
    def status(self) -> str:
        """
        Gets the status of the device.

        Returns:
            str: The status of the device.
        """
        return self.session.status

    @property
    def remote_ip(self) -> str:
        """
        Gets the remote IP address of the device.

        Returns:
            str: The remote IP address of the device.
        """
        return self.session.host

    @property
    def remote_port(self) -> Union[int, str]:
        """
        Gets the remote port of the device.

        Returns:
            Union[int, str]: The remote port of the device.
        """
        return self.session.port

    @property
    def username(self) -> str:
        """
        Gets the username used for connecting to the device.

        Returns:
            str: The username used for connecting to the device.
        """
        return self.session.username

```

## Key Features
- **Configuration Management**: At its core, `BaseDevice` is initialized with a configuration dictionary that specifies the necessary parameters for the device session. This design allows for flexible device configuration, accommodating various connection details such as device name, IP address, credentials, and more.

- **Session Handling**: Upon initialization, `BaseDevice` automatically creates a `Session` object. This session is crucial for establishing and managing the connection with the network device. The `connect` and `disconnect` methods provide straightforward mechanisms to start and terminate sessions, encapsulating the underlying complexity of session management.

- **Command Execution**: The class offers two primary methods for executing commands on the device: `run` and `run_timing`. These methods are designed to handle different command execution scenarios, offering flexibility in terms of response timing, error detection, and output processing.

    - The `run` method is suited for commands where an expected response string is known, allowing for precise control over command execution and response collection.
    - The `run_timing` method, on the other hand, provides a more dynamic approach, useful for commands that do not have a predictable response end. It uses timing thresholds to determine when command output has concluded.
- **Advanced Output Processing**: Both execution methods support optional arguments for enhanced output processing, such as TextFSM template parsing, command and prompt stripping, normalization of output, and error handling based on custom criteria.

- **Utility Methods**: BaseDevice includes utility methods like `find_prompt` to retrieve the current command line prompt and properties to access session status and connection details. These utilities aid in monitoring and interacting with the device session effectively.

## Use Cases
`BaseDevice` is designed to be a versatile base class for various types of network devices, offering a unified approach to:

- Establish secure and reliable device connections.
- Execute and manage command output and responses.
- Simplify session and connection parameter management.
- Facilitate the development of device-specific subclasses that require custom handling or extended functionalities.

## Conclusion
The `BaseDevice` class abstracts away the intricacies of device session management, providing a robust and flexible foundation for building network device interactions. Through its comprehensive interface and utility functions, it enables developers to focus on higher-level automation and management tasks, streamlining the process of network device administration.