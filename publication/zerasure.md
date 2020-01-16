# Zerasure
Zerasure is the source code repository for the FAST'19 paper

**Fast Erasure Coding for Data Storage: A Comprehensive Study of the Acceleration Techniques**  
Tianli Zhou and Chao Tian, Texas A&M University

Link: [https://www.usenix.org/conference/fast19/presentation/zhou]

Zerasure is released under the new BSD license.

Github: [https://github.com/zhoutl1106/zerasure]

## Abstract

Various techniques have been proposed in the literature to improve erasure code computation efficiency, including optimizing  bitmatrix  design,  optimizing  computation  schedule,  common  XOR  operation  reduction,  caching  management techniques, and vectorization techniques.  These techniques  were  largely  proposed  individually  previously,  and in this work,  we seek to use them jointly.   In order to accomplish this task, these techniques need to be thoroughly evaluated individually, and their relation better understood. Building  on  extensive  test  results,  we  develop  methods  to systematically optimize the computation chain together with the  underlying  bitmatrix. This  led  to  a  simple  design  approach of optimizing the bitmatrix by minimizing a weighted cost function, and also a straightforward erasure coding procedure:  use the given bitmatrix to produce the computation schedule, which utilizes both the XOR reduction and caching management techniques, and apply XOR level vectorization. This procedure can provide a better performance than most existing techniques,  and even compete against well-known codes such as EVENODD, RDP, and STAR codes.  Moreover, the result suggests that vectorizing the XOR operation is a better choice than directly vectorizing finite field operations, not only because of the better encoding throughput,but also its minimal migration efforts onto newer CPUs.
