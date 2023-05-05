const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'plum',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Your personal Phonebook
        <span role="img" aria-label="Phone icon">
          <svg>
            {' '}
            <use href="/icons/phone.svg"></use>
          </svg>
        </span>
      </h1>
    </div>
  );
}
