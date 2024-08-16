import { ChangeEvent } from "react";

interface labelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
const InputBox = ({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputType) => {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-900 text-lg">
        {label}
      </label>
      <input
        type={type || "text"}
        onChange={onChange}
        className="bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputBox;
