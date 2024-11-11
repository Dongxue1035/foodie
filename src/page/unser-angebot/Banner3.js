function OurFood() {
  return (
    <div style={styles.container}>
      

      <div style={styles.content}>
        <h1 style={styles.heading}>Fresh food at work – from a smart vending machine?</h1>
        <ul style={styles.list}>
          <li style={styles.listItem}>✓ Over 100 main courses</li>
          <li style={styles.listItem}>✓ Products from regional partners (made in Germany)</li>
          <li style={styles.listItem}>✓ Always fresh & varied: our Food are restocked 2-3 times each week</li>
        </ul>
        <button style={styles.meetingButton}><a href="#footer">Arrange an initial meeting</a></button>
      </div>

      <div style={styles.imageContainer} className=" flex !flex-col lg:!flex-row">
        <img src="./1.png" alt="Salad" style={styles.image} />
        <img src="./2.jpg" alt="Foodie Vending Machine" style={styles.image} />
        <img src="./1.jpg" alt="Pasta Dish" style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#F7ECEC',
    gap: '20px', // Increases spacing between main sections
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: '20px',
  },
  content: {
    textAlign: 'center',
    maxWidth: '600px',
    margin: '20px 0',
  },
  heading: {
    fontSize: '2em',
    color: '#2D1B47',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  list: {
    marginTop: '70px',
    listStyleType: 'none',
    padding: 0,
    marginBottom: '20px',
    color: '#2A1A1F',
  },
 listItem: {
    marginBottom: '10px', // Space between list items
  },
  meetingButton: {
    marginTop: '20px',
    backgroundColor: '#F16E21',
    color: '#FFFFFF',
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    fontWeight: 'bold',
  },
  imageContainer: {

  
    gap: '15px', // Adds spacing between images
    marginTop: '20px',
  },
  image: {
    width: '350px',
    height: '350px',
    borderRadius: '20px',
    objectFit: 'cover',
  },
};


export default OurFood;
