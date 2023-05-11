# Node.js Email Sender

This project is a simple Node.js application that sends emails to a list of recipients using the `nodemailer` package.

## Requirements

- Node.js installed on your machine.
- An `.env` file with your Gmail credentials and email subject.
- A `emails.json` file with the list of recipient emails.

## Setup and Installation

1. Clone or download this repository.

2. Install the required dependencies by running the following command in your terminal:

    ```
    npm install
    ```

3. Create a `.env` file in the root directory of your project. Add your Gmail account's email and app password, along with the email subject line:

    ```
    GMAIL_EMAIL=your-email@gmail.com
    GMAIL_APP_PASSWORD=your-app-password
    EMAIL_SUBJECT=your-email-subject
    ```

4. Create a `emails.json` file in the root directory of your project. Add the recipient emails in an array format:

    ```json
    [
        "recipient1@gmail.com",
        "recipient2@gmail.com",
        ...
    ]
    ```

## Usage

To run the application, use the following command in your terminal:

```bash
node index.js
```

This command will send an email with the subject and body you specified in the .env file to each email address listed in the emails.json file.

## Notes
The application sends a maximum of 500 emails at a time due to Gmail's daily sending limits.
The application uses a secure connection to Gmail's SMTP server via port 465.
The pool option is set to true to use connection pooling, which can improve performance when sending multiple emails.
The email content currently includes a plain text body and an HTML body. You can modify these to meet your needs.
The application does not currently support attachments, but you can uncomment the attachments option and add attachments if needed.

