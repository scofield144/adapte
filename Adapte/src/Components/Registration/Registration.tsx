import React, { useState } from "react";

const RegistrationSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <div className="md-max:max-w-md mx-auto p-6  text-left relative">
      <h2 className="text-xl font-semibold mb-4 ">
        JUNTE-SE AO NOSSO PROJECTO!
      </h2>
      <p className="mb-6">
        Se você quer fazer a diferença, queremos ouvir de você!
      </p>

      <form onSubmit={handleSubmit}>
      <div className="md-min:flex md-min:flex-row w-full md-min:gap-5">
        <div className="md-min:w-[351px]">
          <div className="mb-4 ">
            <label className="block  text-sm font-medium mb-1 ">
              {/* Nome: */}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full h-14   border-gray-300 rounded-md p-2 bg-magenta"
                placeholder="Nome completo"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              {/* Email: */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full h-14  border-gray-300 rounded-md p-2 bg-magenta"
                placeholder="Email"
              />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {/* Mensagem: */}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 block md-min:w-[30rem] md-min:h-[200px] w-full h-[10rem]  border-gray-300 rounded-md p-2 bg-magenta"
              placeholder="Por que quer se inscrever?"
            />
          </label>
        </div>
        </div>
        <button
          type="submit"
          className="
          md-min:w-[252px]
          md-min:h-14
          w-full bg-blue-500
          md-min:absolute
          md-min:bottom-[3rem]
          md-min:left-[60px]
         hover:bg-blue-600 
            
            
            
            bg-Black text-white font-semibold py-3 px-6 rounded-lg max-w-fit
      hover:bg-white hover:text-Black hover:border-Black transition-all duration-500 ease-in-out
      hover:border-solid hover:border-2 inline-block text-center
            
            "
        >
          Enviar Seus Dados
        </button>
      </form>

      {/* <p className="mt-4">Estamos ansiosos para conhecer você!</p> */}
    </div>
  );
};

export default RegistrationSection;
