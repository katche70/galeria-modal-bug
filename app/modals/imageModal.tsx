import { Galeria } from '@nandorojo/galeria';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ImageModal() {
    const router = useRouter();
    const url = 'https://picsum.photos/200/300'

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Image Modal</Text>
            <Galeria urls={[url]}>
                <Galeria.Image>
                    <Image
                        source={{ uri: url }}
                        style={styles.image}
                    />
                </Galeria.Image>
            </Galeria>
            <Button title="Close" onPress={() => router.back()} />
            <Button title="Open one more modal" onPress={() => router.push('/modals/imageModal2')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 300,
        marginBottom: 20,
    },
}); 