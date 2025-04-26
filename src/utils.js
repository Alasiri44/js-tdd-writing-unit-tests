// Your code here
export function pointsForWord(word){
    let points = 0;
    for(const char of word){
        if(/[?/"!@#%$^&*()' .,{}0-9]/.test(char)){
            points += 0;
        }else {
        points += /[aeiou]/.test(char.toLowerCase()) ? 1:2
        }
    }
    return points;
}