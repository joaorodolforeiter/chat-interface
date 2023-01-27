import { PaperPlaneRight } from "phosphor-react";

export function ChatInput() {
  return (
    <div className="h-14 flex justify-center w-full rounded-full bg-[#282843] mt-6 px-6">
      <input
        className="w-full bg-transparent outline-none text-[#E1E1E6] placeholder:text-[#E1E1E6]"
        placeholder="Digite sua mensagem"
        type="text"
      />
      <button>
        <PaperPlaneRight size={24} weight="fill" color="#E1E1E6" />
      </button>
    </div>
  );
}
