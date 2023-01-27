import { ChatHeader } from "./components/ChatHeader";
import { ChatInput } from "./components/ChatInput";
import { Message } from "./components/Message";
import { messages } from "./data/messages";

export function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-zinc-800">
      <div
        className={
          "flex flex-col w-full px-8 py-6 items-center " +
          "bg-[#1A1924] shadow-lg shadow-[#1A1924] " +
          "sm:rounded-t-lg sm:px-16 sm:py-8 sm:h-5/6 max-sm:h-full max-w-7xl"
        }
      >
        <ChatHeader
          profileName={"Matheus Henrique Reiter"}
          profilePhoto={"https://github.com/matheushenriquereiter.png"}
        />
        <div className="flex flex-col flex-1 items-center w-full overflow-y-auto scrollbar-hide">
          <div className="text-[#E1E1E6] text-xs mb-8">Hoje 11:30</div>
          <div className="flex flex-col w-full gap-7">
            {messages.map((message, index) => (
              <Message
                key={index}
                author={message.author}
                time={message.time}
                user={message.user}
              >
                {message.content}
              </Message>
            ))}
          </div>
        </div>

        <ChatInput />
      </div>
    </div>
  );
}
