export default function renderSEO(dataSEO) {
  switch (dataSEO.name) {
    case "Beach & Bohem":
      return "Photoshoot for Beach & Bohem, a sustainable jewellery brand inspired by the turquoise sea and tropical destinations. Contact me for a shoot!";
    case "Mahichic":
      return "Photoshoot for Mahichic, a slow-fashion brand based in Bali, Indonesia, capturing a summer story about self-expression, self-love and freedom. Contact me for a shoot!";
    case "Swimwear":
      return "Destination photoshoot for a sustainable swimwear brand, captured on the tropical beach of Bali Indonesia. Contact me for a shoot!";
    case "Atame":
      return "Photoshoot to showcase the first collection of Atame, an eco-friendly swimwear produced in Bali, Indonesia. Contact me for a shoot!";
    case "Luluyasmine":
      return "Photoshoot on the beach in beautiful Bali for Lulu Yasmine, a sustainable brand that creates unique pieces with traditional Balinese handcrafted techniques.";
    case "Studio shoot":
      return "Studio shoot showcasing the latest collection for Lulu Yasmine for their online catalogue. Contact me for a shoot!";
    case "Pure the Label":
      return "Photoshoot sustainable & ethical brand Pure the label. Shoot in a villa in Bali, creating a warm and minimalist atmosphere with neutral tones.";
    case "Bymnē":
      return "Photoshoot to capture the beautiful products of Bymnē. Each product is consciously designed to make you feel good, inspired and to invoke emotions.";
    default:
      return "Fashion & Product photography shoot for sustainable brand. Contact me to learn more and book a shoot for your brand!";
  }
}
