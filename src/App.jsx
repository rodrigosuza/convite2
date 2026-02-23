import invitationImg from './assets/iara.jpg'

function App() {
  const whatsappLink = "https://wa.me/5594991897327?text=Ol%C3%A1%20noivos%2C%20eu%20estou%20confirmando%20minha%20presen%C3%A7a!!";
  const mapsLink = "https://maps.app.goo.gl/NJjM6NwJ2VTGdLc7A?g_st=iw";
  const listsLink = "https://ronald-iara.vercel.app/";

  const handleConfirmation = () => {
    window.location.href = whatsappLink;
  };

  const handleLocation = () => {
    window.open(mapsLink, '_blank');
  };

  const handleGifts = () => {
    window.open(listsLink, '_blank');
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-start justify-center bg-[#f3e9e2] overflow-hidden touch-none">
      <div className="w-full max-w-md relative">
        <img
          src={invitationImg}
          alt="Convite Ronald & Iara"
          className="w-full h-auto block select-none pointer-events-none"
          loading="eager"
        />

        {/* Botão Invisível: Confirmação de Presença */}
        <button
          onClick={handleConfirmation}
          className="absolute bg-transparent border-none cursor-pointer outline-none focus:outline-none"
          style={{
            top: '57%',
            left: '10%',
            width: '26%',
            height: '14%',
            zIndex: 10
          }}
          aria-label="Confirmar Presença"
        />

        {/* Botão Invisível: Localização */}
        <button
          onClick={handleLocation}
          className="absolute bg-transparent border-none cursor-pointer outline-none focus:outline-none"
          style={{
            top: '57%',
            left: '37%',
            width: '26%',
            height: '14%',
            zIndex: 10
          }}
          aria-label="Ver Localização"
        />

        {/* Botão Invisível: Lista de Presentes */}
        <button
          onClick={handleGifts}
          className="absolute bg-transparent border-none cursor-pointer outline-none focus:outline-none"
          style={{
            top: '57%',
            left: '64%',
            width: '26%',
            height: '14%',
            zIndex: 10
          }}
          aria-label="Lista de Presentes"
        />
      </div>
    </div>
  )
}

export default App
