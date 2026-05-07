function About({ image = "https://cdn-icons-png.flaticon.com/256/1/1176.png", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;