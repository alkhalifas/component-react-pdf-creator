import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
// Create styles

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Times-Roman'
    },
    author: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 40,
    },
    abstract: {
        fontSize: 14,
        margin: 12,
        marginBottom: 0,
        textAlign: 'center',
        fontFamily: 'Times-Roman',
        fontWeight: '400'
    },
    subtitle: {
        fontSize: 12,
        margin: 12,
        marginBottom: 0,
        fontFamily: 'Times-Roman'
    },
    text: {
        margin: 12,
        marginTop: 2,
        fontSize: 11,
        textAlign: 'justify',
        fontFamily: 'Times-Roman'
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
        color: 'grey',
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
});


Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

// Create Document Component
export const MyDocument = () => (
    <Document>
        <Page style={styles.body}>

            <Text style={styles.header} fixed>
                Reviewed and Published. dsj:2021.0926.1234567890 [data.science]
            </Text>
            <Text style={styles.title}>Applications of Advanced Machine Learning for Boston Price Prediction</Text>
            <Text style={styles.author}>Saleh E. Alkhalifa</Text>
            <Text style={styles.abstract}>
                Abstract
            </Text>
            <Text style={styles.text}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                mucho tiempo que viv??a un hidalgo de los de lanza en astillero, adarga
                antigua, roc??n flaco y galgo corredor. Una olla de algo m??s vaca que
                carnero, salpic??n las m??s noches, duelos y quebrantos los s??bados,
                lentejas los viernes, alg??n palomino de a??adidura los domingos,
                consum??an las tres partes de su hacienda. El resto della conclu??an sayo
                de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                mismo, los d??as de entre semana se honraba con su vellori de lo m??s
                fino. Ten??a en su casa una ama que pasaba de los cuarenta, y una sobrina
                que no llegaba a los veinte, y un mozo de campo y plaza, que as??
                ensillaba el roc??n como tomaba la podadera. Frisaba la edad de nuestro
                hidalgo con los cincuenta a??os, era de complexi??n recia, seco de carnes,
                enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                ten??a el sobrenombre de Quijada o Quesada (que en esto hay alguna
                diferencia en los autores que deste caso escriben), aunque por
                conjeturas veros??miles se deja entender que se llama Quijana; pero esto
                importa poco a nuestro cuento; basta que en la narraci??n d??l no se salga
                un punto de la verdad
            </Text>
            <Text style={styles.subtitle}>
                Introduction
            </Text>
            <Text style={styles.text}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                mucho tiempo que viv??a un hidalgo de los de lanza en astillero, adarga
                antigua, roc??n flaco y galgo corredor. Una olla de algo m??s vaca que
                carnero, salpic??n las m??s noches, duelos y quebrantos los s??bados,
                lentejas los viernes, alg??n palomino de a??adidura los domingos,
                consum??an las tres partes de su hacienda. El resto della conclu??an sayo
                de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                mismo, los d??as de entre semana se honraba con su vellori de lo m??s
                fino. Ten??a en su casa una ama que pasaba de los cuarenta, y una sobrina
                que no llegaba a los veinte, y un mozo de campo y plaza, que as??
                ensillaba el roc??n como tomaba la podadera. Frisaba la edad de nuestro
                hidalgo con los cincuenta a??os, era de complexi??n recia, seco de carnes,
                enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                ten??a el sobrenombre de Quijada o Quesada (que en esto hay alguna
                diferencia en los autores que deste caso escriben), aunque por
                conjeturas veros??miles se deja entender que se llama Quijana; pero esto
                importa poco a nuestro cuento; basta que en la narraci??n d??l no se salga
                un punto de la verdad
            </Text>
            <Text style={styles.text}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                mucho tiempo que viv??a un hidalgo de los de lanza en astillero, adarga
                antigua, roc??n flaco y galgo corredor. Una olla de algo m??s vaca que
                carnero, salpic??n las m??s noches, duelos y quebrantos los s??bados,
                lentejas los viernes, alg??n palomino de a??adidura los domingos,
                consum??an las tres partes de su hacienda. El resto della conclu??an sayo
                de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                mismo, los d??as de entre semana se honraba con su vellori de lo m??s
                fino. Ten??a en su casa una ama que pasaba de los cuarenta, y una sobrina
                que no llegaba a los veinte, y un mozo de campo y plaza, que as??
                ensillaba el roc??n como tomaba la podadera. Frisaba la edad de nuestro
                hidalgo con los cincuenta a??os, era de complexi??n recia, seco de carnes,
                enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                ten??a el sobrenombre de Quijada o Quesada (que en esto hay alguna
                diferencia en los autores que deste caso escriben), aunque por
                conjeturas veros??miles se deja entender que se llama Quijana; pero esto
                importa poco a nuestro cuento; basta que en la narraci??n d??l no se salga
                un punto de la verdad
            </Text>
            <Text style={styles.text}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                mucho tiempo que viv??a un hidalgo de los de lanza en astillero, adarga
                antigua, roc??n flaco y galgo corredor. Una olla de algo m??s vaca que
                carnero, salpic??n las m??s noches, duelos y quebrantos los s??bados,
                lentejas los viernes, alg??n palomino de a??adidura los domingos,
                consum??an las tres partes de su hacienda. El resto della conclu??an sayo
                de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                mismo, los d??as de entre semana se honraba con su vellori de lo m??s
                fino. Ten??a en su casa una ama que pasaba de los cuarenta, y una sobrina
                que no llegaba a los veinte, y un mozo de campo y plaza, que as??
                ensillaba el roc??n como tomaba la podadera. Frisaba la edad de nuestro
                hidalgo con los cincuenta a??os, era de complexi??n recia, seco de carnes,
                enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                ten??a el sobrenombre de Quijada o Quesada (que en esto hay alguna
                diferencia en los autores que deste caso escriben), aunque por
                conjeturas veros??miles se deja entender que se llama Quijana; pero esto
                importa poco a nuestro cuento; basta que en la narraci??n d??l no se salga
                un punto de la verdad
            </Text>
            <Text style={styles.text}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                mucho tiempo que viv??a un hidalgo de los de lanza en astillero, adarga
                antigua, roc??n flaco y galgo corredor. Una olla de algo m??s vaca que
                carnero, salpic??n las m??s noches, duelos y quebrantos los s??bados,
                lentejas los viernes, alg??n palomino de a??adidura los domingos,
                consum??an las tres partes de su hacienda. El resto della conclu??an sayo
                de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                mismo, los d??as de entre semana se honraba con su vellori de lo m??s
                fino. Ten??a en su casa una ama que pasaba de los cuarenta, y una sobrina
                que no llegaba a los veinte, y un mozo de campo y plaza, que as??
                ensillaba el roc??n como tomaba la podadera. Frisaba la edad de nuestro
                hidalgo con los cincuenta a??os, era de complexi??n recia, seco de carnes,
                enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                ten??a el sobrenombre de Quijada o Quesada (que en esto hay alguna
                diferencia en los autores que deste caso escriben), aunque por
                conjeturas veros??miles se deja entender que se llama Quijana; pero esto
                importa poco a nuestro cuento; basta que en la narraci??n d??l no se salga
                un punto de la verdad
            </Text>
            <Text style={styles.text}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                mucho tiempo que viv??a un hidalgo de los de lanza en astillero, adarga
                antigua, roc??n flaco y galgo corredor. Una olla de algo m??s vaca que
                carnero, salpic??n las m??s noches, duelos y quebrantos los s??bados,
                lentejas los viernes, alg??n palomino de a??adidura los domingos,
                consum??an las tres partes de su hacienda. El resto della conclu??an sayo
                de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                mismo, los d??as de entre semana se honraba con su vellori de lo m??s
                fino. Ten??a en su casa una ama que pasaba de los cuarenta, y una sobrina
                que no llegaba a los veinte, y un mozo de campo y plaza, que as??
                ensillaba el roc??n como tomaba la podadera. Frisaba la edad de nuestro
                hidalgo con los cincuenta a??os, era de complexi??n recia, seco de carnes,
                enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                ten??a el sobrenombre de Quijada o Quesada (que en esto hay alguna
                diferencia en los autores que deste caso escriben), aunque por
                conjeturas veros??miles se deja entender que se llama Quijana; pero esto
                importa poco a nuestro cuento; basta que en la narraci??n d??l no se salga
                un punto de la verdad
            </Text>
            <Text style={styles.text}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                mucho tiempo que viv??a un hidalgo de los de lanza en astillero, adarga
                antigua, roc??n flaco y galgo corredor. Una olla de algo m??s vaca que
                carnero, salpic??n las m??s noches, duelos y quebrantos los s??bados,
                lentejas los viernes, alg??n palomino de a??adidura los domingos,
                consum??an las tres partes de su hacienda. El resto della conclu??an sayo
                de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                mismo, los d??as de entre semana se honraba con su vellori de lo m??s
                fino. Ten??a en su casa una ama que pasaba de los cuarenta, y una sobrina
                que no llegaba a los veinte, y un mozo de campo y plaza, que as??
                ensillaba el roc??n como tomaba la podadera. Frisaba la edad de nuestro
                hidalgo con los cincuenta a??os, era de complexi??n recia, seco de carnes,
                enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                ten??a el sobrenombre de Quijada o Quesada (que en esto hay alguna
                diferencia en los autores que deste caso escriben), aunque por
                conjeturas veros??miles se deja entender que se llama Quijana; pero esto
                importa poco a nuestro cuento; basta que en la narraci??n d??l no se salga
                un punto de la verdad
            </Text>
            <Text style={styles.text}>
                En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
                mucho tiempo que viv??a un hidalgo de los de lanza en astillero, adarga
                antigua, roc??n flaco y galgo corredor. Una olla de algo m??s vaca que
                carnero, salpic??n las m??s noches, duelos y quebrantos los s??bados,
                lentejas los viernes, alg??n palomino de a??adidura los domingos,
                consum??an las tres partes de su hacienda. El resto della conclu??an sayo
                de velarte, calzas de velludo para las fiestas con sus pantuflos de lo
                mismo, los d??as de entre semana se honraba con su vellori de lo m??s
                fino. Ten??a en su casa una ama que pasaba de los cuarenta, y una sobrina
                que no llegaba a los veinte, y un mozo de campo y plaza, que as??
                ensillaba el roc??n como tomaba la podadera. Frisaba la edad de nuestro
                hidalgo con los cincuenta a??os, era de complexi??n recia, seco de carnes,
                enjuto de rostro; gran madrugador y amigo de la caza. Quieren decir que
                ten??a el sobrenombre de Quijada o Quesada (que en esto hay alguna
                diferencia en los autores que deste caso escriben), aunque por
                conjeturas veros??miles se deja entender que se llama Quijana; pero esto
                importa poco a nuestro cuento; basta que en la narraci??n d??l no se salga
                un punto de la verdad
            </Text>


            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
                `${pageNumber} / ${totalPages}`
            )} fixed />
        </Page>
    </Document>
);