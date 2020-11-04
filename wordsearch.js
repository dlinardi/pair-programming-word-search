const transpose = function(matrix) {    
    let output = [];

    for (let i = 0; i < matrix[0].length; i++) {
        output.push([]);
        for (const array of matrix) {
            output[i].push(array[i]);
        }
    }
    return output;
};

// stretch attempt

// const transposeDiag = function(matrix) {    
//     let output = [];
//     let counter = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         output.push([]);
//         for (let j = 0; j < matrix[i].length; j++) { //array of matrix: array = rows
//             //console.log('counter ->', counter);
//             //console.log('output[i] ->', output[i]);
//             //console.log('matrix[j][i] ->',matrix[j][i]);
//             output[i].push(matrix[j + counter][i + counter]);
//             counter++;
//         }
//         counter = 0;
//     }
//     console.log(output);
//     return output;
// };

const wordSearch = (letters, word) => {
    if (letters === undefined || letters.length <= 0) {
        return false;
    } else {
        const horizontalJoin = letters.map(ls => ls.join(''));
        const verticalJoin = transpose(letters).map(ls => ls.join(''));
        // const diagonalJoin = transposeDiag(letters).map(ls => ls.join(''));
    
        for (l of horizontalJoin) {
            if (l.includes(word)) return true;
        }
    
        for (l of verticalJoin) {
            if (l.includes(word)) return true;
        }

        // stretch attempt
        // for (l of diagonalJoin) {
        //     if (l.includes(word)) return true;
        // }

    }
    
    return false;
};


module.exports = wordSearch;