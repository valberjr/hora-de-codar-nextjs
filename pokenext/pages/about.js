import Image from 'next/image';

import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                sagittis aliquet est, at blandit neque sollicitudin sit amet.
                Suspendisse imperdiet arcu non metus posuere, id aliquet odio
                dictum. In hac habitasse platea dictumst. In et ullamcorper mi.
                Sed volutpat bibendum eleifend. Aenean molestie sed arcu id
                vestibulum. Vestibulum semper, justo et interdum pellentesque,
                est ligula venenatis neque, nec aliquet magna dolor eget tortor.
                Mauris tempus orci sed nunc vulputate tincidunt. Sed rutrum
                nulla ipsum, a congue felis ultrices quis. Pellentesque finibus,
                ex congue pulvinar placerat, mi lorem viverra ligula, ac aliquet
                sapien nisi quis augue. Vestibulum iaculis nulla a risus
                tristique gravida. Donec elementum neque id mauris ullamcorper,
                id ornare erat sodales.
            </p>
            <Image
                src="/images/charizard.png"
                alt="Charizard"
                height="300"
                width="300"
            />
        </div>
    );
}
