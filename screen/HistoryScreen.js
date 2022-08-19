import { useLayoutEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CredentialTransactionCard from '../components/CredentialTransactionCard';
import VerificationTransactionCard from '../components/VerificationTransactionCard';
import styles from './HistoryScreen.style';
// import Settings from '../SettingsScreen/SettingsScreen';

export default function History({ navigation }) {
    const [pastTransactions, setPastTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [filterData, setFilterData] = useState([]);


    function addPastTransaction() {
        var rand = 1000 * Math.random().toPrecision(3);
        if (rand % 2 == 0) {
            setPastTransactions((currentPastTransactions) => [
                ...currentPastTransactions,
                { transactionType: "Credential Issuance", status: "Accepted", credentialName: "Test", issuer: "Test", issueDate: "02/17", expirationDate: "12/22", key: Math.random().toString() },
            ]);
            setFilterData((currentPastTransactions) => [
                ...currentPastTransactions,
                { transactionType: "Credential Issuance", status: "Accepted", credentialName: "Test", issuer: "Test", issueDate: "02/17", expirationDate: "12/22", key: Math.random().toString() },
            ]);
        }

        else {
            setPastTransactions((currentPastTransactions) => [
                ...currentPastTransactions,
                { transactionType: "Verification Request", status: "Accepted", requestedCredential: "Degree", verifier: "Employer", acceptDate: "12/22", expirationDate: "12/27", key: Math.random().toString() },
            ]);
            setFilterData((currentPastTransactions) => [
                ...currentPastTransactions,
                { transactionType: "Verification Request", status: "Accepted", requestedCredential: "Degree", verifier: "Employer", acceptDate: "12/22", expirationDate: "12/27", key: Math.random().toString() },
            ]);
        }
    }

    const searchFilter = (text) => {
        if (text && text.length > 1) {
            const newData = pastTransactions.filter((item) => {
                const query = text.toUpperCase()
                if (item.transactionType === "Credential Issuance") {
                    const credName = item.credentialName ? item.credentialName.toUpperCase() : ''.toUpperCase();
                    const issuer = item.issuer ? item.issuer.toUpperCase() : ''.toUpperCase();
                    return credName.indexOf(query) > -1 || issuer.indexOf(query) > -1;
                }
                else if (item.transactionType === "Verification Request") {
                    const reqCred = item.requestedCredential ? item.requestedCredential.toUpperCase() : ''.toUpperCase();
                    const verifier = item.verifier ? item.verifier.toUpperCase() : ''.toUpperCase();
                    return reqCred.indexOf(query) > -1 || verifier.indexOf(query) > -1;
                }
            });

            setFilterData(newData);
            setSearch(text);
        }

        else {
            setFilterData(pastTransactions);
            setSearch(text);
        }
    }

    // const goToSettings = () => {
    //     navigation.navigate("Settings");
    // }
    useLayoutEffect(() => {
        navigation.setOptions({
            // headerLeft: () => (
            //     <View style={styles.settingsIcon}>
            //         <TouchableOpacity onPress={() => { navigation.navigate("Settings") }}>
            //             <Image source={require('../../assets/settings.png')} />
            //         </TouchableOpacity>
            //     </View>
            // ),
            headerRight: () => (
                <View>
                    <TouchableOpacity onPress={addPastTransaction} style={{ marginRight: 5 }}>
                        <Image source={require('../assets/add_icon.png')} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchContainerInner}>
                        <Image source={require('../assets/search_icon.png')} style={{ width: 23, height: 23, marginTop: 4.5, marginLeft: 5 }} />
                        <TextInput style={styles.searchBar} value={search} onChangeText={(text) => searchFilter(text)} placeholder='Search' />
                    </View>
                </View>
                <View style={styles.historyListContainer}>
                    <FlatList data={filterData} renderItem={(itemData) => {
                        if (itemData.item.transactionType.toUpperCase() === "CREDENTIAL ISSUANCE") {
                            return (
                                <TouchableOpacity onPress={() => { navigation.navigate("Details", {text: 'Credential from History', transactionType: itemData.item.transactionType, status: itemData.item.status, credentialName: itemData.item.credentialName, issuer: itemData.item.issuer, issueDate: itemData.item.issueDate, expirationDate: itemData.item.expirationDate,}) }}>
                                    <CredentialTransactionCard
                                    transactionType={itemData.item.transactionType}
                                    status={itemData.item.status}
                                    credentialName={itemData.item.credentialName}
                                    issuer={itemData.item.issuer} />
                                </TouchableOpacity>
                                
                            );
                        }
                        else {
                            return (
                                <TouchableOpacity onPress={() => { navigation.navigate("Details", {text: 'Verification from History', transactionType: itemData.item.transactionType, status: itemData.item.status, requestedCredential: itemData.item.requestedCredential, verifier: itemData.item.verifier, acceptDate: itemData.item.acceptDate, expirationDate: itemData.item.expirationDate,}) }}>
                                    <VerificationTransactionCard 
                                    transactionType={itemData.item.transactionType}
                                    status={itemData.item.status}
                                    requestedCredential={itemData.item.requestedCredential}
                                    verifier={itemData.item.verifier} />
                                </TouchableOpacity>
                                
                            )
                        }
                    }}
                        alwaysBounceVertical={false}
                    />
                </View>
            </View>
        </View>
    );
}