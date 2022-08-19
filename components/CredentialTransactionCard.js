import { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function CredentialTransactionCard(props) {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    

    return (
        <View style={styles.transactionCard} >
            <View style={{ flexDirection: 'row', width: '100%', height: '50%' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.transactionCardTitles}>Transaction Type</Text>
                    <Text style={styles.transactionCardInfo}>{props.transactionType}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 60 }}>
                    <Text style={styles.transactionCardTitles}>Status</Text>
                    <Text style={styles.transactionCardInfo}>{props.status}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', height: '50%', paddingTop: 25 }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.transactionCardTitles}>Credential Name</Text>
                    <Text style={styles.transactionCardInfo}>{props.credentialName}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 64 }}>
                    <Text style={styles.transactionCardTitles}>Issuer</Text>
                    <Text style={styles.transactionCardInfo}>{props.issuer}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    transactionCard: {
        width: '100%',
        height: 200,
        marginTop: 5,
        marginBottom: 19,
        backgroundColor: '#D0F0FA',
        borderRadius: 5,
        elevation: 3,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowRadius: 2,
        paddingVertical: 45,
        paddingHorizontal: 27
    },
    transactionCardTitles: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        textShadowRadius: 1,
        shadowOpacity: 0.15,
        textShadowOffset: { width: 1, height: 1 }
    },
    transactionCardInfo: {
        fontSize: 18,
        shadowOpacity: 0.25,
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 }
    }
})