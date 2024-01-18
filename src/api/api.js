const shuffle_array = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const fatchQuizData = async(difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(url)).json();
    return data.results.map((dt) => ({
        ...dt,
        answers: shuffle_array([...dt.incorrect_answers, dt.correct_answer])
    }))
}