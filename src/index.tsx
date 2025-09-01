import { createRoot } from "react-dom/client";
import {
  VList,
  VListHandle,
  experimental_VGrid as VGrid,
  VGridHandle,
  WindowVirtualizer,
} from "virtua";
import { useEffect, useRef, useState } from "react";
import { createEditor, plainSchema } from "./lib";

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

const Comp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(
    "Hello World.\nこんにちは。\n👍❤️🧑‍🧑‍🧒"
  );
  useEffect(() => {
    if (!ref.current) return;
    return createEditor({
      doc: value,
      schema: plainSchema({ multiline: true }),
      onChange: setValue,
    }).input(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: "white",
        padding: 8,
      }}
    >
      {value.split("\n").map((r, i) => (
        <div key={i}>{r ? r : <br />}</div>
      ))}
    </div>
  );
};

const App = () => {
  const ref = useRef<VListHandle>(null);
  const refRev = useRef<VListHandle>(null);
  const ref2 = useRef<VListHandle>(null);
  const ref3 = useRef<VListHandle>(null);
  const ref4 = useRef<VGridHandle>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const length = 1000;

  useEffect(() => {
    refRev.current?.scrollToIndex(999);
  }, []);

  const [hide, setHide] = useState(false);

  return (
    <div>
      <div>
        <Comp />
      </div>
      <div>
        <input ref={inputRef} type="number" defaultValue={0} />
        <button
          onClick={() => {
            const i = inputRef.current?.valueAsNumber ?? 0;
            ref.current?.scrollToIndex(i);
            ref2.current?.scrollToIndex(i);
            ref3.current?.scrollToIndex(i);
            ref4.current?.scrollToIndex(i, i);
          }}
        >
          scroll to index
        </button>
        <button
          onClick={() => {
            setHide((prev) => !prev);
          }}
        >
          hide
        </button>
      </div>
      <div style={{ display: hide ? "none" : "flex", padding: 10 }}>
        <VList ref={ref} style={{ height: 200 }}>
          {createRows(length)}
        </VList>
        <VList ref={refRev} style={{ height: 200 }} reverse>
          {createRows(length)}
        </VList>
      </div>
      <div style={{ display: "flex", padding: 10 }}>
        <VList ref={ref2} style={{ height: 200 }} horizontal>
          {createColumns(length)}
        </VList>
      </div>
      <div style={{ padding: 10 }}>
        <VGrid ref={ref4} style={{ height: 200 }} row={1000} col={500}>
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
      <div style={{ padding: 20 }}>
        <WindowVirtualizer>{createRows(1000)}</WindowVirtualizer>
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
