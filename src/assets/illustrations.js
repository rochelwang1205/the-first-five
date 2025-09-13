const modules = import.meta.glob("./illustration/*.{svg,png,jpg,jpeg}", {
  eager: true,
  import: "default",
});

export const illustrationMap = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const file = path.split("/").pop();                   // e.g. "TF5_illustration_trade_off.svg"
    const key = file.replace(/\.(svg|png|jpe?g)$/i, "");  // e.g. "TF5_illustration_trade_off"
    return [key, url];
  })
);