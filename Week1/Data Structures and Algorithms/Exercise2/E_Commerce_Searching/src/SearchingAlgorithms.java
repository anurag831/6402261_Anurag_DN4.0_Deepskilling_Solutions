public class SearchingAlgorithms {
    int LinearSearch(Product[] products, int id) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == id) {
                return i;
            }
        }
        return -1;
    }

    int BinarySearch(Product[] products, int id) {
        int start = 0;
        int end = products.length - 1;

        while (start < end) {
            int mid = start + (end - start) / 2;
            if (products[mid].productId == id) {
                return mid;
            } else if (products[mid].productId < id) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
}
