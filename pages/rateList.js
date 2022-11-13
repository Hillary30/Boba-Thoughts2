import styles from '../styles/Home.module.css'

export default function List(props) {
    const {drinks} = props;
    console.log(drinks);
    return <div className={styles.divV1}>
        <h1 className={styles.h1}>List of Your Ratings</h1>
        {
            drinks.map(
                (item)=> <>
                    <div className={styles.divV2}>
                        <h2 className={styles.h2}>{item.drinkName}</h2> 
                        <p className={styles.p}>{item.rating}</p>
                    </div>
                </>
            )
        }
    </div>
}

export async function getStaticProps(context) {
    const res = await fetch("http://localhost:3000/api/drink");
    const drinks = await res.json();

    return {
        props: {drinks}
    };
}