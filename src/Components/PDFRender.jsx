import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A2" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.text}>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text}>Section #2</Text>
      </View>
    </Page>
  </Document>
);

const PDFRender = () => {
  return (
     <div>
      {/* View PDF */}
      <PDFViewer width="100%" height="500">
        <MyDocument />
      </PDFViewer>

      {/* Download PDF*/}
      <div className="mt-4">
        <PDFDownloadLink document={<MyDocument />} fileName="example.pdf">
          {({ loading }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PDFRender;
