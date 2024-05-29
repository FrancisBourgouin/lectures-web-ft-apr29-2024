// Promises!

connectToDB()
  .then(fetchAllJokes)
  .then(outputJokes)
  .catch(reportErrors)
  .finally(closeDBConnection);

//  Async / Await (Syntax sugar on top of promises)

const someObj = {};
const anotherObj = new Object();

const runTasks = async () => {
  try {
    await connectToDB();
    const jokes = await fetchAllJokes();
    outputJokes(jokes);
  } catch (error) {
    reportErrors(error);
  } finally {
    closeDBConnection();
  }
};

runTasks()

Promise.all()