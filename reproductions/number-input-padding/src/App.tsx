import {
  ChakraProvider,
  LocaleProvider,
  NumberInput,
  defaultSystem,
} from "@chakra-ui/react"

function Example({ label, padding }: { label: string; padding?: string }) {
  return (
    <div>
      <p style={{ marginBottom: 8 }}>{label}</p>
      <NumberInput.Root defaultValue="123456789012345" size="md" width="140px">
        <NumberInput.Control />
        <NumberInput.Input aria-label={label} pe={padding} />
      </NumberInput.Root>
    </div>
  )
}

export default function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <main style={{ padding: 24, maxWidth: 720, fontFamily: "sans-serif" }}>
        <h1 style={{ fontSize: 24 }}>
          NumberInput text under stepper controls
        </h1>
        <p style={{ marginTop: 12 }}>
          Select each input value and type a long number. Compare the last
          digits with the same input using explicit inline-end padding.
        </p>
        {(["ltr", "rtl"] as const).map((direction) => (
          <section key={direction} style={{ marginTop: 28 }}>
            <h2 style={{ fontSize: 20 }}>
              {direction === "ltr" ? "English (LTR)" : "Arabic (RTL)"}
            </h2>
            <LocaleProvider locale={direction === "rtl" ? "ar-AE" : "en-US"}>
              <div
                dir={direction}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 32,
                  marginTop: 8,
                }}
              >
                <Example label={direction + " default padding"} />
                <Example label={direction + " explicit padding"} padding="8" />
              </div>
            </LocaleProvider>
          </section>
        ))}
      </main>
    </ChakraProvider>
  )
}
