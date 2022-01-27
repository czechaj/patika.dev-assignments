# Veri Yapıları ve Algoritmalar

## Insertion Sort Assignment
***
[22,27,16,2,18,6] -> Insertion Sort

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
2. Big-O gösterimini yazınız.
3. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.

***

 

1. 
* 27 16 ile yer değiştirir.  
[16,22,27,2,18,6]
* 27 2 ile yer değiştirir.  
[2,16,22,27,18,6]
* 27 18 ile yer değiştirir.  
[2,16,18,22,27,6] 
* 27 6 ile yer değiştirir  
[2,6,16,18,22,27]   



2. 
( n )    
(n-1)    
(n-2)    
...   
1

n(n+1)/2  

O(n²) olarak bulunur. 



Average Case kapsamına girer.

---
---

[7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

1. [3,7,5,8,2,9,4,15,6]
2. [3,5,7,8,2,9,4,15,6]
3. [2,3,5,7,8,9,4,15,6]
4. [2,3,4,5,7,8,9,15,6]