import "../styles/reset.css";
import "../styles/global.css";
import StyledComponentsRegistry from "@/lib/styled-component-registry";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <StyledComponentsRegistry>
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
