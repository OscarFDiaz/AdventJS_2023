function drawGift(size, symbol) {
  let box = '';
  let repeatedSymbol = 0;

  if (size === 1) return '#\n';

  if (size >= 2) {
    repeatedSymbol = symbol.repeat(size - 2);
  }

  box += `${' '.repeat(size - 1)}${'#'.repeat(size)}\n`;

  let count = size - 2;
  for (let i = 0; i < size - 2; i++) {
    box += `${' '.repeat(count)}#${repeatedSymbol}#${symbol.repeat(i)}#\n`;
    count--;
  }

  box += `${'#'.repeat(size)}${repeatedSymbol}#\n`;

  for (let i = size - 3; i >= 0; i--) {
    box += `#${repeatedSymbol}#${symbol.repeat(i)}#\n`;
  }

  box += `${'#'.repeat(size)}\n`;

  return box;
}

const result = drawGift(4, '+');
console.log(result);
/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

const result1 = drawGift(5, '*');
console.log(result1);
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/
const result2 = drawGift(1, '^');
console.log(result2);
/*
#
*/
const result3 = drawGift(10, '%');
console.log(result3);
/*       ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
*/
