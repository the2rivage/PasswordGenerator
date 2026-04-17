import { useCallback, useEffect, useRef, useState } from "react";

export default function PasswordApp() {
  let [password, setpassword] = useState("");
  let [length, setLength] = useState(8);
  let [isNum, setIsNum] = useState(false);
  let [isChar, setIsChar] = useState(false);

  let passwordRef = useRef(null);

  // Generates a random password based on selected options (length, numbers, special chars)
  let passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";

    if (isNum) str += "1234567890";
    if (isChar) str += "@#$%&*!";

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      pass += str.charAt(idx);
    }

    setpassword(pass);
  }, [length, isNum, isChar, setpassword]);

  // Re-generate password whenever length, character options change
  useEffect(() => {
    passwordGenerator();
  }, [length, isChar, isNum, passwordGenerator]);

  // Copies the generated password to the clipboard and highlights it
  let copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3); <-- to select a specific range instead of the whole text
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto bg-gray-800 shadow-lg rounded-2xl px-6 py-8">
        <h1 className="text-white text-3xl font-bold text-center mb-6 tracking-wide">
          🔐 Password Generator
        </h1>
        <div className="flex items-center rounded-xl overflow-hidden mb-6 border border-gray-600 bg-gray-900">
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full py-2.5 px-4 bg-transparent text-orange-400 font-mono text-sm tracking-widest"
            ref={passwordRef}
          />
          <button
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white text-sm font-semibold px-4 py-2.5 shrink-0"
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-4 text-sm text-gray-300">
          <div className="flex items-center justify-between gap-4">
            <label className="font-medium whitespace-nowrap">
              Length:{" "}
              <span className="text-orange-400 font-bold">{length}</span>
            </label>
            <input
              type="range"
              min={0}
              max={30}
              value={length}
              className="w-full cursor-pointer accent-orange-500"
              onChange={(evt) => setLength(evt.target.value)}
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => setIsNum(!isNum)}
                defaultChecked={isNum}
                id="isNumAllowed"
                className="accent-orange-500 w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="isNumAllowed"
                className="cursor-pointer select-none"
              >
                Numbers
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => setIsChar(!isChar)}
                defaultChecked={isChar}
                id="isCharAllowed"
                className="accent-orange-500 w-4 h-4 cursor-pointer"
              />
              <label
                htmlFor="isCharAllowed"
                className="cursor-pointer select-none"
              >
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
