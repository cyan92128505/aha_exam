import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
