# NumberInput stepper padding reproduction

Reproduces the input text area extending underneath the stepper controls in the
published `@chakra-ui/react@3.38.0`. The second input in each direction uses
`pe="8"` to show the expected spacing.

## Run locally

From this directory, with Node.js 24 installed, run:

```sh
npm install --workspaces=false
npm run dev
```

Open the URL printed by Vite. Select each input value and type a long number. In
the default input the text and caret can sit beneath the increment and decrement
buttons. The explicit-padding input reserves space for them. Both LTR and RTL
examples are provided.

Related proposed fix: https://github.com/chakra-ui/chakra-ui/pull/11083

Prepared with Codex assistance.
