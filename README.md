## Task: custom calculator

https://docs.google.com/document/d/1j8DnTnRSNoRBdYtKu3Rgk1STLso4X5Rev2-oEyxMsK8/edit#heading=h.rtfo3o71ktll

## How to run the app:

To get started, just clone the repository, install packages and run dev server:

    git clone https://github.com/Ischerba32/simple-calculator-app.git
    npm install
    npm run dev

### How to build:

If you wanted to build this app, you should run next one script:

    npm run build
Complete bundle will store in "dist" folder

### Directory structure:
    Root folder:
        .husky
            - pre-commit
            - pre-push
        dist -- build directory
            - index.html
            - main.bundle.js
            - polyfill.bundle.js
        src -- source code directory
            calculator -- calculator class folder
                - index.js
            commands -- commands classes folder
                basic -- commands like "left - operator - right" folder
                    __tests__
                        - basicCommands.spec.js
                    - addCommand.js
                    - divCommand.js
                    - mulCommand.js
                    - subCommand.js
                extended -- commands like "operand - operator" folder
                    __tests__
                        - extendedCommands.spec.js
                    - factorialCommand.js
                    - inverSignCommand.js
                    - oneDivXCommand.js
                    - percentCommand.js
                memory -- calculator memory commands folder
                    __tests__
                        - memoryCommands.spec.js
                    - memoryClearCommand.js
                    - memoryMinusCommand.js
                    - memoryPlusCommand.js
                    - memoryReadCommand.js
                pows -- calculator pows command folder
                    __tests__
                        - powsCommands.spec.js
                    - cubeCommand.js
                    - sqrCommand.js
                    - tenPowCommand.js
                    - yCommand.js
                roots -- calculator roots commands folder
                    __tests__
                        - rootCommand.spec.js
                    - cubeRootCommand.js
                    - squareRootCommand.js
                    - yRootCommand.js
                - Command.js
            factory -- commands factory class folder
                - commandsFactory.js
            helpers -- helpers folder
                - commandsList.js
            receiver -- receiver class folder
                - receiver.js
            styles -- styles folder
                - styles.css
            - index.html
            - index.js



