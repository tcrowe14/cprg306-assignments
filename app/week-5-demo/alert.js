export default function Alert({ type }) {
    return (
      <div
        className={`text-lg ${
          type === "success" ? "bg-green-100" : "bg-red-100"
        } p-2`}
      >
        {type === "success" ? "Success" : "Error"}
      </div>
    );
  }