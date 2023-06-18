import { createRoot } from "react-dom/client";
import { VList, VListHandle, VGrid } from "virtua";
import { useRef } from "react";

const createRows = (num: number) => {
  const heights = [20, 40, 80, 77];
  return Array.from({ length: num }).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          height: heights[i % 4],
          borderBottom: "solid 1px #ccc",
          background: "#fff",
        }}
      >
        {i}
      </div>
    );
  });
};

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
  const ref = useRef<VListHandle>(null);
  const ref2 = useRef<VListHandle>(null);
  const ref3 = useRef<VListHandle>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const length = 1000;

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#eeeeee" }}>
      <div>
        <input ref={inputRef} type="number" defaultValue={0} />
        <button
          onClick={() => {
            const i = inputRef.current?.valueAsNumber ?? 0;
            ref.current?.scrollToIndex(i);
            ref2.current?.scrollToIndex(i);
            ref3.current?.scrollToIndex(i);
          }}
        >
          scroll to index
        </button>
      </div>
      <div style={{ padding: 10 }}>
        <VList ref={ref} style={{ height: 200 }}>
          {createRows(length)}
        </VList>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ padding: 10, direction: "ltr" }}>
          <VList ref={ref2} style={{ width: 600, height: 200 }} horizontal>
            {createColumns(length)}
          </VList>
        </div>
        <div style={{ padding: 10, direction: "rtl" }}>
          <VList
            ref={ref3}
            style={{ width: 600, height: 200 }}
            horizontal
            mode="rtl"
          >
            {createColumns(length)}
          </VList>
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <VGrid style={{ height: 200 }} row={1000} col={500}>
          {({ rowIndex, colIndex }) => (
            <div
              style={{
                width: ((colIndex % 3) + 1) * 100,
                border: "solid 1px gray",
                background: "white",
              }}
            >
              {rowIndex} / {colIndex}
            </div>
          )}
        </VGrid>
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
