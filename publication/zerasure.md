# Zerasure
Zerasure is the source code repository for the FAST'19 paper

**Fast Erasure Coding for Data Storage: A Comprehensive Study of the Acceleration Techniques**  
Tianli Zhou and Chao Tian, Texas A&M University

Link: [https://www.usenix.org/conference/fast19/presentation/zhou]

Zerasure is released under the new BSD license.

Github: [https://github.com/zhoutl1106/zerasure]

## Abstract

Various techniques have been proposed in the literature toimprove erasure code computation efficiency, including op-timizing  bitmatrix  design,  optimizing  computation  sched-ule,  common  XOR  operation  reduction,  caching  manage-ment techniques, and vectorization techniques.  These tech-niques  were  largely  proposed  individually  previously,  andin this work,  we seek to use them jointly.   In order to ac-complish this task, these techniques need to be thoroughlyevaluated individually, and their relation better understood.Building  on  extensive  test  results,  we  develop  methods  tosystematically optimize the computation chain together withthe  underlying  bitmatrix.   This  led  to  a  simple  design  ap-proach of optimizing the bitmatrix by minimizing a weightedcost function, and also a straightforward erasure coding pro-cedure:  use the given bitmatrix to produce the computationschedule, which utilizes both the XOR reduction and cachingmanagement techniques, and apply XOR level vectorization.This procedure can provide a better performance than mostexisting techniques,  and even compete against well-knowncodes such as EVENODD, RDP, and STAR codes.  More-over, the result suggests that vectorizing the XOR operationis a better choice than directly vectorizing finite field oper-ations, not only because of the better encoding throughput,but also its minimal migration efforts onto newer CPUs.
