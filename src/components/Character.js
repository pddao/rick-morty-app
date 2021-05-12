function Character({character}) {

    return <section>
        <h3>
            {character.name}
        </h3>
        <img src={character.image}/>
        <p>
            {character.species}
        </p>
    </section>
}

export default Character;