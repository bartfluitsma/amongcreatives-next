export default function renderDescription(dataDescr) {
  switch (dataDescr.name) {
    case "Beach & Bohem":
      return "A sustainable jewellery brand inspired by the turquoise sea and tropical destinations.  ";
    case "Mahichic":
      return "Capturing a summer story about self-expression, self-love and freedom for Mahichic, a slow-fashion brand based in Bali.";
    case "Swimwear":
      return "Destination photoshoot for a sustainable swimwear brand, captured on the tropical beach of Bali Indonesia.  ";
    case "Atame":
      return "Showcasing the first collection of Atame, an eco-friendly swimwear produced in Bali, Indonesia.  ";
    case "Luluyasmine":
      return "Photoshoot on the beach in beautiful Bali for Lulu Yasmine, a sustainable brand that creates unique pieces with traditional Balinese handcrafted techniques.";
    case "Studio shoot":
      return "Studio shoot showcasing the latest collection for Lulu Yasmine for their online catalogue.  ";
    case "Pure the Label":
      return "Photoshoot sustainable & ethical brand Pure the label. Shoot in a villa in Bali, creating a warm and minimalist atmosphere with neutral tones.";
    case "Bymnē":
      return "Capturing the beautiful products of Bymnē. Each product is consciously designed to make you feel good & inspired and to invoke emotion.";
    default:
      return "Fashion & Product photography shoot for sustainable brand. Contact me to learn more and book a shoot for your brand!";
  }
}
