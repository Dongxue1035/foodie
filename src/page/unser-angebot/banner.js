const Banner = () => {
  return (

    <section style={styles.container}>
      <div style={styles.content} className="!flex !flex-col lg:!flex-row items-center">
        <div style={styles.textSection}>
          <h1 style={styles.heading}>The 24/7 catering solution for employees</h1>

          <ul style={styles.list}>
            <li style={styles.listItem}>✓  Fresh & delicious food - available around the clock</li>
            <li style={styles.listItem}>✓  Customized product range thanks to AI forecasting</li>
            <li style={styles.listItem}>✓  Tasting package & 3-month trial period</li>
            <li style={styles.listItem}>✓  A diverse menu offering both Asian and European flavors</li>
          </ul>
          <button style={styles.arrangeButton} >
           <a href="#footer">Arrange an initial meeting</a>
          </button>

        </div>
        <div style={styles.imageSection} className="flex-2 ">
          <img
            src="./3.jpg" // 指向 public 文件夹下的图片
            alt="Smart fridge with food"
            style={styles.image}
            className="w-full l mt-8 lg:mt-0 lg:ml-[150px] max-w-[779px] h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF6E5',
    padding: '40px',
    minHeight: '700px',
    fontFamily: 'Arial, sans-serif',
  },
  content: {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
  },
  textSection: {
    flex: 1,
    paddingRight: '20px',
  },
  heading: {
    marginTop: '50px',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#2A1A1F',
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
  arrangeButton: {
    padding: '10px 20px',
    backgroundColor: '#F16E21',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '50px',
  },
  imageSection: {
   // Increase left margin to push the image further to the right
         // Increase flex value to allow more space for the ima
  },
  image: {
   // Increase max width for larger image size
    objectFit: 'cover',
    borderRadius: '20px',
  },
};

export default Banner;

