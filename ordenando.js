// Função para trocar os valores de duas posições de um vetor
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
  };
  
  // Função para embaralhar os elementos de um vetor
  const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
      const pos1 = Math.floor(Math.random() * array.length);
      const pos2 = Math.floor(Math.random() * array.length);
      swap(array, pos1, pos2);
    }
  };
  
  // Função de ordenação Bubble Sort
  const bubble_sort = (array) => {
    const n = array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          swap(array, i, i + 1);
          swapped = true;
        }
      }
    } while (swapped);
  };
  
  // Função de ordenação Selection Sort
  const selection_sort = (array) => {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        swap(array, i, minIndex);
      }
    }
  };
  
  // Função de ordenação Quick Sort (recursivo)
  const quick_sort = (array, left, right) => {
    if (left < right) {
      const pivotIndex = partition(array, left, right);
      quick_sort(array, left, pivotIndex - 1);
      quick_sort(array, pivotIndex + 1, right);
    }
  };
  
  // Função de particionamento (apoio ao Quick Sort)
  const partition = (array, left, right) => {
    const pivot = array[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (array[j] <= pivot) {
        i++;
        swap(array, i, j);
      }
    }
    swap(array, i + 1, right);
    return i + 1;
  };
  
  
