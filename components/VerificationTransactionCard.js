import { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function VerificationTransactionCard(props) {
    
    return (
        <View style={styles.transactionCard}>
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
                    <Text style={styles.transactionCardTitles}>Requested Credential</Text>
                    <Text style={styles.transactionCardInfo}>{props.requestedCredential}</Text>
                </View>
                <View style={{ flexDirection: 'column', paddingLeft: 17 }}>
                    <Text style={styles.transactionCardTitles}>Verifier</Text>
                    <Text style={styles.transactionCardInfo}>{props.verifier}</Text>
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
        backgroundColor: '#1E6484',
        borderRadius: 5,
        elevation: 3,
        shadowOpacity: 0.7,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#000',
        shadowRadius: 2,
        paddingVertical: 45,
        paddingHorizontal: 27
    },
    transactionCardTitles: {
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 20,
        textShadowRadius: 1,
        shadowOpacity: 0.15,
        textShadowOffset: { width: 1, height: 1 }
    },
    transactionCardInfo: {
        color: 'white',
        fontSize: 18,
        shadowOpacity: 0.25,
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 }
    }
})