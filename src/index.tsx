import { createRoot } from "react-dom/client";
import { VList } from "virtua";

const createColumns = (num: number) => {
  return Array.from({ length: num }).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          width: i % 3 === 0 ? 100 : 60,
          borderRight: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        Column {i}
      </div>
    );
  });
};

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#eeeeee" }}>
      <div style={{ padding: 10, direction: "ltr" }}>
        <div>ltr</div>
        <VList style={{ width: 800, height: 200 }} horizontal>
          {createColumns(1000)}
        </VList>
      </div>
      <div style={{ padding: 10, direction: "rtl" }}>
        <div>rtl</div>
        <VList style={{ width: 800, height: 200 }} horizontal rtl>
          {createColumns(1000)}
        </VList>
      </div>
    </div>
  );
};

(async () => {
  if (typeof ResizeObserver === "undefined") {
    window.ResizeObserver = (
      await import("@juggle/resize-observer")
    ).ResizeObserver;
  }
  createRoot(document.getElementById("root")!).render(<App />);
})();
