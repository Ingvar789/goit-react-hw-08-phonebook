const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'calc(100vh/3)',
  },
  title: {
    fontWeight: 700,
    fontSize: 52,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your personal Phonebook</h1>
    </div>
  );
}
