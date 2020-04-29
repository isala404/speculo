# benchmark
```shell script
C:\Users\Home\Anaconda3\python.exe F:/Isala/speculo/models/model_tester.py
2020-04-29 16:25:12.588972: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cudart64_101.dll
WARNING:tensorflow:From C:\Users\Home\Anaconda3\lib\site-packages\tensorflow_core\python\compat\v2_compat.py:88: disable_resource_variables (from tensorflow.python.ops.variable_scope) is deprecated and will be removed in a future version.
Instructions for updating:
non-resource variables are not supported in the long term
WARNING:tensorflow:From F:\Isala\speculo\models\facedetector\yolo\yolo.py:60: The name tf.keras.backend.get_session is deprecated. Please use tf.compat.v1.keras.backend.get_session instead.

2020-04-29 16:25:18.551401: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library nvcuda.dll
2020-04-29 16:25:18.575130: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1555] Found device 0 with properties: 
pciBusID: 0000:01:00.0 name: GeForce GTX 750 Ti computeCapability: 5.0
coreClock: 1.1105GHz coreCount: 5 deviceMemorySize: 2.00GiB deviceMemoryBandwidth: 80.47GiB/s
2020-04-29 16:25:18.575608: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cudart64_101.dll
2020-04-29 16:25:18.580700: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cublas64_10.dll
2020-04-29 16:25:18.586892: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cufft64_10.dll
2020-04-29 16:25:18.588467: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library curand64_10.dll
2020-04-29 16:25:18.593610: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cusolver64_10.dll
2020-04-29 16:25:18.597209: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cusparse64_10.dll
2020-04-29 16:25:18.609276: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cudnn64_7.dll
2020-04-29 16:25:18.610245: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1697] Adding visible gpu devices: 0
2020-04-29 16:25:18.610896: I tensorflow/core/platform/cpu_feature_guard.cc:142] Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2
2020-04-29 16:25:18.611911: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1555] Found device 0 with properties: 
pciBusID: 0000:01:00.0 name: GeForce GTX 750 Ti computeCapability: 5.0
coreClock: 1.1105GHz coreCount: 5 deviceMemorySize: 2.00GiB deviceMemoryBandwidth: 80.47GiB/s
2020-04-29 16:25:18.612344: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cudart64_101.dll
2020-04-29 16:25:18.612530: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cublas64_10.dll
2020-04-29 16:25:18.612795: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cufft64_10.dll
2020-04-29 16:25:18.613081: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library curand64_10.dll
2020-04-29 16:25:18.613315: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cusolver64_10.dll
2020-04-29 16:25:18.613543: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cusparse64_10.dll
2020-04-29 16:25:18.614115: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cudnn64_7.dll
2020-04-29 16:25:18.615199: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1697] Adding visible gpu devices: 0
2020-04-29 16:25:20.373126: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1096] Device interconnect StreamExecutor with strength 1 edge matrix:
2020-04-29 16:25:20.373398: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1102]      0 
2020-04-29 16:25:20.373570: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1115] 0:   N 
2020-04-29 16:25:20.375103: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1241] Created TensorFlow device (/job:localhost/replica:0/task:0/device:GPU:0 with 1367 MB memory) -> physical GPU (device: 0, name: GeForce GTX 750 Ti, pci bus id: 0000:01:00.0, compute capability: 5.0)
WARNING:tensorflow:From C:\Users\Home\Anaconda3\lib\site-packages\tensorflow_core\python\ops\resource_variable_ops.py:1635: calling BaseResourceVariable.__init__ (from tensorflow.python.ops.resource_variable_ops) with constraint is deprecated and will be removed in a future version.
Instructions for updating:
If using Keras pass *_constraint arguments to layers.
Processing Target Faces ....
2020-04-29 16:25:35.062092: E tensorflow/core/grappler/optimizers/meta_optimizer.cc:561] layout failed: Invalid argument: Subshape must have computed start >= end since stride is negative, but is 0 and 2 (computed from start 0 and end 9223372036854775807 over shape with rank 2 and stride-1)
2020-04-29 16:25:35.094278: E tensorflow/core/grappler/optimizers/meta_optimizer.cc:561] remapper failed: Invalid argument: Subshape must have computed start >= end since stride is negative, but is 0 and 2 (computed from start 0 and end 9223372036854775807 over shape with rank 2 and stride-1)
2020-04-29 16:25:35.383681: E tensorflow/core/grappler/optimizers/meta_optimizer.cc:561] remapper failed: Invalid argument: Subshape must have computed start >= end since stride is negative, but is 0 and 2 (computed from start 0 and end 9223372036854775807 over shape with rank 2 and stride-1)
2020-04-29 16:25:35.531989: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cudnn64_7.dll
2020-04-29 16:25:36.533806: W tensorflow/stream_executor/gpu/redzone_allocator.cc:312] Internal: Invoking GPU asm compilation is supported on Cuda non-Windows platforms only
Relying on driver to perform ptx compilation. This message will be only logged once.
2020-04-29 16:25:36.594950: W tensorflow/core/common_runtime/bfc_allocator.cc:243] Allocator (GPU_0_bfc) ran out of memory trying to allocate 1.25GiB with freed_by_count=0. The caller indicates that this is not a failure, but may mean that there could be performance gains if more memory were available.
2020-04-29 16:25:36.595571: I tensorflow/stream_executor/platform/default/dso_loader.cc:44] Successfully opened dynamic library cublas64_10.dll
2020-04-29 16:25:37.077037: W tensorflow/core/common_runtime/bfc_allocator.cc:243] Allocator (GPU_0_bfc) ran out of memory trying to allocate 880.28MiB with freed_by_count=0. The caller indicates that this is not a failure, but may mean that there could be performance gains if more memory were available.
2020-04-29 16:25:37.675326: W tensorflow/core/common_runtime/bfc_allocator.cc:243] Allocator (GPU_0_bfc) ran out of memory trying to allocate 2.15GiB with freed_by_count=0. The caller indicates that this is not a failure, but may mean that there could be performance gains if more memory were available.
2020-04-29 16:25:37.706470: W tensorflow/core/common_runtime/bfc_allocator.cc:243] Allocator (GPU_0_bfc) ran out of memory trying to allocate 2.15GiB with freed_by_count=0. The caller indicates that this is not a failure, but may mean that there could be performance gains if more memory were available.
2020-04-29 16:25:38.310650: W tensorflow/core/common_runtime/bfc_allocator.cc:243] Allocator (GPU_0_bfc) ran out of memory trying to allocate 1.14GiB with freed_by_count=0. The caller indicates that this is not a failure, but may mean that there could be performance gains if more memory were available.
2020-04-29 16:25:38.545478: W tensorflow/core/common_runtime/bfc_allocator.cc:243] Allocator (GPU_0_bfc) ran out of memory trying to allocate 1.06GiB with freed_by_count=0. The caller indicates that this is not a failure, but may mean that there could be performance gains if more memory were available.
Start Predicting on the dataset .... 
Model could not find the proper name for dataset_evaluate\Person01\person01100-90+0.jpg | Prediction Name - unknown
current_samples 0 correct_predictions 0 unknown_predictions 1 accuracy: 100
current_samples 1 correct_predictions 1 unknown_predictions 1 accuracy: 100.0
current_samples 2 correct_predictions 2 unknown_predictions 1 accuracy: 100.0
current_samples 3 correct_predictions 3 unknown_predictions 1 accuracy: 100.0
current_samples 4 correct_predictions 4 unknown_predictions 1 accuracy: 100.0
current_samples 5 correct_predictions 5 unknown_predictions 1 accuracy: 100.0
Model could not find the proper name for dataset_evaluate\Person01\person01114-30-90.jpg | Prediction Name - unknown
current_samples 5 correct_predictions 5 unknown_predictions 2 accuracy: 100.0
current_samples 6 correct_predictions 6 unknown_predictions 2 accuracy: 100.0
current_samples 7 correct_predictions 7 unknown_predictions 2 accuracy: 100.0
current_samples 8 correct_predictions 8 unknown_predictions 2 accuracy: 100.0
current_samples 9 correct_predictions 9 unknown_predictions 2 accuracy: 100.0
current_samples 10 correct_predictions 10 unknown_predictions 2 accuracy: 100.0
Invalid Prediction for dataset_evaluate\Person01\person01120-30+0.jpg | Prediction Name - person15
current_samples 11 correct_predictions 10 unknown_predictions 2 accuracy: 90.9090909090909
current_samples 12 correct_predictions 11 unknown_predictions 2 accuracy: 91.66666666666666
Invalid Prediction for dataset_evaluate\Person01\person01122-30+30.jpg | Prediction Name - person05
current_samples 13 correct_predictions 11 unknown_predictions 2 accuracy: 84.61538461538461
current_samples 14 correct_predictions 12 unknown_predictions 2 accuracy: 85.71428571428571
current_samples 15 correct_predictions 13 unknown_predictions 2 accuracy: 86.66666666666667
current_samples 16 correct_predictions 14 unknown_predictions 2 accuracy: 87.5
current_samples 17 correct_predictions 15 unknown_predictions 2 accuracy: 88.23529411764706
current_samples 18 correct_predictions 16 unknown_predictions 2 accuracy: 88.88888888888889
current_samples 19 correct_predictions 17 unknown_predictions 2 accuracy: 89.47368421052632
current_samples 20 correct_predictions 18 unknown_predictions 2 accuracy: 90.0
current_samples 21 correct_predictions 19 unknown_predictions 2 accuracy: 90.47619047619048
current_samples 22 correct_predictions 20 unknown_predictions 2 accuracy: 90.9090909090909
current_samples 23 correct_predictions 21 unknown_predictions 2 accuracy: 91.30434782608695
current_samples 24 correct_predictions 22 unknown_predictions 2 accuracy: 91.66666666666666
current_samples 25 correct_predictions 23 unknown_predictions 2 accuracy: 92.0
current_samples 26 correct_predictions 24 unknown_predictions 2 accuracy: 92.3076923076923
current_samples 27 correct_predictions 25 unknown_predictions 2 accuracy: 92.5925925925926
current_samples 28 correct_predictions 26 unknown_predictions 2 accuracy: 92.85714285714286
current_samples 29 correct_predictions 27 unknown_predictions 2 accuracy: 93.10344827586206
current_samples 30 correct_predictions 28 unknown_predictions 2 accuracy: 93.33333333333333
current_samples 31 correct_predictions 29 unknown_predictions 2 accuracy: 93.54838709677419
current_samples 32 correct_predictions 30 unknown_predictions 2 accuracy: 93.75
current_samples 33 correct_predictions 31 unknown_predictions 2 accuracy: 93.93939393939394
current_samples 34 correct_predictions 32 unknown_predictions 2 accuracy: 94.11764705882352
current_samples 35 correct_predictions 33 unknown_predictions 2 accuracy: 94.28571428571428
current_samples 36 correct_predictions 34 unknown_predictions 2 accuracy: 94.44444444444444
current_samples 37 correct_predictions 35 unknown_predictions 2 accuracy: 94.5945945945946
current_samples 38 correct_predictions 36 unknown_predictions 2 accuracy: 94.73684210526315
current_samples 39 correct_predictions 37 unknown_predictions 2 accuracy: 94.87179487179486
current_samples 40 correct_predictions 38 unknown_predictions 2 accuracy: 95.0
current_samples 41 correct_predictions 39 unknown_predictions 2 accuracy: 95.1219512195122
current_samples 42 correct_predictions 40 unknown_predictions 2 accuracy: 95.23809523809523
current_samples 43 correct_predictions 41 unknown_predictions 2 accuracy: 95.34883720930233
current_samples 44 correct_predictions 42 unknown_predictions 2 accuracy: 95.45454545454545
current_samples 45 correct_predictions 43 unknown_predictions 2 accuracy: 95.55555555555556
current_samples 46 correct_predictions 44 unknown_predictions 2 accuracy: 95.65217391304348
current_samples 47 correct_predictions 45 unknown_predictions 2 accuracy: 95.74468085106383
current_samples 48 correct_predictions 46 unknown_predictions 2 accuracy: 95.83333333333334
current_samples 49 correct_predictions 47 unknown_predictions 2 accuracy: 95.91836734693877
current_samples 50 correct_predictions 48 unknown_predictions 2 accuracy: 96.0
current_samples 51 correct_predictions 49 unknown_predictions 2 accuracy: 96.07843137254902
current_samples 52 correct_predictions 50 unknown_predictions 2 accuracy: 96.15384615384616
current_samples 53 correct_predictions 51 unknown_predictions 2 accuracy: 96.22641509433963
current_samples 54 correct_predictions 52 unknown_predictions 2 accuracy: 96.29629629629629
current_samples 55 correct_predictions 53 unknown_predictions 2 accuracy: 96.36363636363636
current_samples 56 correct_predictions 54 unknown_predictions 2 accuracy: 96.42857142857143
current_samples 57 correct_predictions 55 unknown_predictions 2 accuracy: 96.49122807017544
current_samples 58 correct_predictions 56 unknown_predictions 2 accuracy: 96.55172413793103
current_samples 59 correct_predictions 57 unknown_predictions 2 accuracy: 96.61016949152543
current_samples 60 correct_predictions 58 unknown_predictions 2 accuracy: 96.66666666666667
current_samples 61 correct_predictions 59 unknown_predictions 2 accuracy: 96.72131147540983
current_samples 62 correct_predictions 60 unknown_predictions 2 accuracy: 96.7741935483871
current_samples 63 correct_predictions 61 unknown_predictions 2 accuracy: 96.82539682539682
current_samples 64 correct_predictions 62 unknown_predictions 2 accuracy: 96.875
current_samples 65 correct_predictions 63 unknown_predictions 2 accuracy: 96.92307692307692
Model could not find the proper name for dataset_evaluate\Person01\person01178+30+90.jpg | Prediction Name - unknown
current_samples 65 correct_predictions 63 unknown_predictions 3 accuracy: 96.92307692307692
current_samples 66 correct_predictions 64 unknown_predictions 3 accuracy: 96.96969696969697
Model could not find the proper name for dataset_evaluate\Person01\person01180+60-75.jpg | Prediction Name - unknown
current_samples 66 correct_predictions 64 unknown_predictions 4 accuracy: 96.96969696969697
current_samples 67 correct_predictions 65 unknown_predictions 4 accuracy: 97.01492537313433
current_samples 68 correct_predictions 66 unknown_predictions 4 accuracy: 97.05882352941177
current_samples 69 correct_predictions 67 unknown_predictions 4 accuracy: 97.10144927536231
current_samples 70 correct_predictions 68 unknown_predictions 4 accuracy: 97.14285714285714
current_samples 71 correct_predictions 69 unknown_predictions 4 accuracy: 97.1830985915493
current_samples 72 correct_predictions 70 unknown_predictions 4 accuracy: 97.22222222222221
current_samples 73 correct_predictions 71 unknown_predictions 4 accuracy: 97.26027397260275
current_samples 74 correct_predictions 72 unknown_predictions 4 accuracy: 97.2972972972973
current_samples 75 correct_predictions 73 unknown_predictions 4 accuracy: 97.33333333333334
current_samples 76 correct_predictions 74 unknown_predictions 4 accuracy: 97.36842105263158
current_samples 77 correct_predictions 75 unknown_predictions 4 accuracy: 97.40259740259741
current_samples 78 correct_predictions 76 unknown_predictions 4 accuracy: 97.43589743589743
current_samples 79 correct_predictions 77 unknown_predictions 4 accuracy: 97.46835443037975
Model could not find the proper name for dataset_evaluate\Person01\person01203-60-60.jpg | Prediction Name - unknown
current_samples 79 correct_predictions 77 unknown_predictions 5 accuracy: 97.46835443037975
current_samples 80 correct_predictions 78 unknown_predictions 5 accuracy: 97.5
current_samples 81 correct_predictions 79 unknown_predictions 5 accuracy: 97.53086419753086
current_samples 82 correct_predictions 80 unknown_predictions 5 accuracy: 97.5609756097561
current_samples 83 correct_predictions 81 unknown_predictions 5 accuracy: 97.59036144578313
current_samples 84 correct_predictions 82 unknown_predictions 5 accuracy: 97.61904761904762
current_samples 85 correct_predictions 83 unknown_predictions 5 accuracy: 97.6470588235294
current_samples 86 correct_predictions 84 unknown_predictions 5 accuracy: 97.67441860465115
current_samples 87 correct_predictions 85 unknown_predictions 5 accuracy: 97.70114942528735
current_samples 88 correct_predictions 86 unknown_predictions 5 accuracy: 97.72727272727273
current_samples 89 correct_predictions 87 unknown_predictions 5 accuracy: 97.75280898876404
current_samples 90 correct_predictions 88 unknown_predictions 5 accuracy: 97.77777777777777
current_samples 91 correct_predictions 89 unknown_predictions 5 accuracy: 97.8021978021978
current_samples 92 correct_predictions 90 unknown_predictions 5 accuracy: 97.82608695652173
current_samples 93 correct_predictions 91 unknown_predictions 5 accuracy: 97.84946236559139
current_samples 94 correct_predictions 92 unknown_predictions 5 accuracy: 97.87234042553192
current_samples 95 correct_predictions 93 unknown_predictions 5 accuracy: 97.89473684210527
current_samples 96 correct_predictions 94 unknown_predictions 5 accuracy: 97.91666666666666
current_samples 97 correct_predictions 95 unknown_predictions 5 accuracy: 97.9381443298969
current_samples 98 correct_predictions 96 unknown_predictions 5 accuracy: 97.95918367346938
current_samples 99 correct_predictions 97 unknown_predictions 5 accuracy: 97.97979797979798
current_samples 100 correct_predictions 98 unknown_predictions 5 accuracy: 98.0
Invalid Prediction for dataset_evaluate\Person01\person01225-30+75.jpg | Prediction Name - person15
current_samples 101 correct_predictions 98 unknown_predictions 5 accuracy: 97.02970297029702
current_samples 102 correct_predictions 99 unknown_predictions 5 accuracy: 97.05882352941177
current_samples 103 correct_predictions 100 unknown_predictions 5 accuracy: 97.0873786407767
current_samples 104 correct_predictions 101 unknown_predictions 5 accuracy: 97.11538461538461
current_samples 105 correct_predictions 102 unknown_predictions 5 accuracy: 97.14285714285714
current_samples 106 correct_predictions 103 unknown_predictions 5 accuracy: 97.16981132075472
current_samples 107 correct_predictions 104 unknown_predictions 5 accuracy: 97.19626168224299
current_samples 108 correct_predictions 105 unknown_predictions 5 accuracy: 97.22222222222221
current_samples 109 correct_predictions 106 unknown_predictions 5 accuracy: 97.24770642201835
current_samples 110 correct_predictions 107 unknown_predictions 5 accuracy: 97.27272727272728
current_samples 111 correct_predictions 108 unknown_predictions 5 accuracy: 97.2972972972973
current_samples 112 correct_predictions 109 unknown_predictions 5 accuracy: 97.32142857142857
current_samples 113 correct_predictions 110 unknown_predictions 5 accuracy: 97.34513274336283
current_samples 114 correct_predictions 111 unknown_predictions 5 accuracy: 97.36842105263158
current_samples 115 correct_predictions 112 unknown_predictions 5 accuracy: 97.3913043478261
current_samples 116 correct_predictions 113 unknown_predictions 5 accuracy: 97.41379310344827
current_samples 117 correct_predictions 114 unknown_predictions 5 accuracy: 97.43589743589743
current_samples 118 correct_predictions 115 unknown_predictions 5 accuracy: 97.45762711864407
current_samples 119 correct_predictions 116 unknown_predictions 5 accuracy: 97.47899159663865
current_samples 120 correct_predictions 117 unknown_predictions 5 accuracy: 97.5
current_samples 121 correct_predictions 118 unknown_predictions 5 accuracy: 97.52066115702479
current_samples 122 correct_predictions 119 unknown_predictions 5 accuracy: 97.54098360655738
current_samples 123 correct_predictions 120 unknown_predictions 5 accuracy: 97.5609756097561
current_samples 124 correct_predictions 121 unknown_predictions 5 accuracy: 97.58064516129032
current_samples 125 correct_predictions 122 unknown_predictions 5 accuracy: 97.6
current_samples 126 correct_predictions 123 unknown_predictions 5 accuracy: 97.61904761904762
current_samples 127 correct_predictions 124 unknown_predictions 5 accuracy: 97.63779527559055
current_samples 128 correct_predictions 125 unknown_predictions 5 accuracy: 97.65625
current_samples 129 correct_predictions 126 unknown_predictions 5 accuracy: 97.67441860465115
current_samples 130 correct_predictions 127 unknown_predictions 5 accuracy: 97.6923076923077
current_samples 131 correct_predictions 128 unknown_predictions 5 accuracy: 97.70992366412213
current_samples 132 correct_predictions 129 unknown_predictions 5 accuracy: 97.72727272727273
current_samples 133 correct_predictions 130 unknown_predictions 5 accuracy: 97.74436090225564
current_samples 134 correct_predictions 131 unknown_predictions 5 accuracy: 97.76119402985076
current_samples 135 correct_predictions 132 unknown_predictions 5 accuracy: 97.77777777777777
current_samples 136 correct_predictions 133 unknown_predictions 5 accuracy: 97.79411764705883
current_samples 137 correct_predictions 134 unknown_predictions 5 accuracy: 97.8102189781022
current_samples 138 correct_predictions 135 unknown_predictions 5 accuracy: 97.82608695652173
current_samples 139 correct_predictions 136 unknown_predictions 5 accuracy: 97.84172661870504
current_samples 140 correct_predictions 137 unknown_predictions 5 accuracy: 97.85714285714285
current_samples 141 correct_predictions 138 unknown_predictions 5 accuracy: 97.87234042553192
current_samples 142 correct_predictions 139 unknown_predictions 5 accuracy: 97.88732394366197
current_samples 143 correct_predictions 140 unknown_predictions 5 accuracy: 97.9020979020979
current_samples 144 correct_predictions 141 unknown_predictions 5 accuracy: 97.91666666666666
current_samples 145 correct_predictions 142 unknown_predictions 5 accuracy: 97.93103448275862
current_samples 146 correct_predictions 143 unknown_predictions 5 accuracy: 97.94520547945206
current_samples 147 correct_predictions 144 unknown_predictions 5 accuracy: 97.95918367346938
current_samples 148 correct_predictions 145 unknown_predictions 5 accuracy: 97.97297297297297
current_samples 149 correct_predictions 146 unknown_predictions 5 accuracy: 97.98657718120806
current_samples 150 correct_predictions 147 unknown_predictions 5 accuracy: 98.0
current_samples 151 correct_predictions 148 unknown_predictions 5 accuracy: 98.01324503311258
current_samples 152 correct_predictions 149 unknown_predictions 5 accuracy: 98.02631578947368
current_samples 153 correct_predictions 150 unknown_predictions 5 accuracy: 98.0392156862745
current_samples 154 correct_predictions 151 unknown_predictions 5 accuracy: 98.05194805194806
current_samples 155 correct_predictions 152 unknown_predictions 5 accuracy: 98.06451612903226
current_samples 156 correct_predictions 153 unknown_predictions 5 accuracy: 98.07692307692307
current_samples 157 correct_predictions 154 unknown_predictions 5 accuracy: 98.08917197452229
current_samples 158 correct_predictions 155 unknown_predictions 5 accuracy: 98.10126582278481
current_samples 159 correct_predictions 156 unknown_predictions 5 accuracy: 98.11320754716981
current_samples 160 correct_predictions 157 unknown_predictions 5 accuracy: 98.125
current_samples 161 correct_predictions 158 unknown_predictions 5 accuracy: 98.13664596273291
current_samples 162 correct_predictions 159 unknown_predictions 5 accuracy: 98.14814814814815
current_samples 163 correct_predictions 160 unknown_predictions 5 accuracy: 98.15950920245399
current_samples 164 correct_predictions 161 unknown_predictions 5 accuracy: 98.17073170731707
current_samples 165 correct_predictions 162 unknown_predictions 5 accuracy: 98.18181818181819
current_samples 166 correct_predictions 163 unknown_predictions 5 accuracy: 98.19277108433735
current_samples 167 correct_predictions 164 unknown_predictions 5 accuracy: 98.20359281437125
current_samples 168 correct_predictions 165 unknown_predictions 5 accuracy: 98.21428571428571
Model could not find the proper name for dataset_evaluate\Person02\person02100-90+0.jpg | Prediction Name - unknown
current_samples 168 correct_predictions 165 unknown_predictions 6 accuracy: 98.21428571428571
Model could not find the proper name for dataset_evaluate\Person02\person02101-60-90.jpg | Prediction Name - unknown
current_samples 168 correct_predictions 165 unknown_predictions 7 accuracy: 98.21428571428571
current_samples 169 correct_predictions 166 unknown_predictions 7 accuracy: 98.22485207100591
Model could not find the proper name for dataset_evaluate\Person02\person02104-60-45.jpg | Prediction Name - unknown
current_samples 169 correct_predictions 166 unknown_predictions 8 accuracy: 98.22485207100591
current_samples 170 correct_predictions 167 unknown_predictions 8 accuracy: 98.23529411764706
current_samples 171 correct_predictions 168 unknown_predictions 8 accuracy: 98.24561403508771
current_samples 172 correct_predictions 169 unknown_predictions 8 accuracy: 98.25581395348837
Invalid Prediction for dataset_evaluate\Person02\person02108-60+15.jpg | Prediction Name - person09
current_samples 173 correct_predictions 169 unknown_predictions 8 accuracy: 97.6878612716763
current_samples 174 correct_predictions 170 unknown_predictions 8 accuracy: 97.70114942528735
current_samples 175 correct_predictions 171 unknown_predictions 8 accuracy: 97.71428571428571
current_samples 176 correct_predictions 172 unknown_predictions 8 accuracy: 97.72727272727273
current_samples 177 correct_predictions 173 unknown_predictions 8 accuracy: 97.74011299435028
current_samples 178 correct_predictions 174 unknown_predictions 8 accuracy: 97.75280898876404
Invalid Prediction for dataset_evaluate\Person02\person02119-30-15.jpg | Prediction Name - person04
current_samples 179 correct_predictions 174 unknown_predictions 8 accuracy: 97.20670391061452
Invalid Prediction for dataset_evaluate\Person02\person02120-30+0.jpg | Prediction Name - person04
current_samples 180 correct_predictions 174 unknown_predictions 8 accuracy: 96.66666666666667
current_samples 181 correct_predictions 175 unknown_predictions 8 accuracy: 96.68508287292818
current_samples 182 correct_predictions 176 unknown_predictions 8 accuracy: 96.7032967032967
Model could not find the proper name for dataset_evaluate\Person02\person02127-15-90.jpg | Prediction Name - unknown
current_samples 182 correct_predictions 176 unknown_predictions 9 accuracy: 96.7032967032967
current_samples 183 correct_predictions 177 unknown_predictions 9 accuracy: 96.72131147540983
current_samples 184 correct_predictions 178 unknown_predictions 9 accuracy: 96.73913043478261
current_samples 185 correct_predictions 179 unknown_predictions 9 accuracy: 96.75675675675676
current_samples 186 correct_predictions 180 unknown_predictions 9 accuracy: 96.7741935483871
current_samples 187 correct_predictions 181 unknown_predictions 9 accuracy: 96.79144385026738
current_samples 188 correct_predictions 182 unknown_predictions 9 accuracy: 96.80851063829788
current_samples 189 correct_predictions 183 unknown_predictions 9 accuracy: 96.82539682539682
Invalid Prediction for dataset_evaluate\Person02\person02135-15+30.jpg | Prediction Name - person01
current_samples 190 correct_predictions 183 unknown_predictions 9 accuracy: 96.3157894736842
current_samples 191 correct_predictions 184 unknown_predictions 9 accuracy: 96.33507853403141
current_samples 192 correct_predictions 185 unknown_predictions 9 accuracy: 96.35416666666666
current_samples 193 correct_predictions 186 unknown_predictions 9 accuracy: 96.37305699481865
Model could not find the proper name for dataset_evaluate\Person02\person02142+0-60.jpg | Prediction Name - unknown
current_samples 193 correct_predictions 186 unknown_predictions 10 accuracy: 96.37305699481865
current_samples 194 correct_predictions 187 unknown_predictions 10 accuracy: 96.3917525773196
current_samples 195 correct_predictions 188 unknown_predictions 10 accuracy: 96.41025641025641
Invalid Prediction for dataset_evaluate\Person02\person02145+0-15.jpg | Prediction Name - person12
current_samples 196 correct_predictions 188 unknown_predictions 10 accuracy: 95.91836734693877
current_samples 197 correct_predictions 189 unknown_predictions 10 accuracy: 95.93908629441624
current_samples 198 correct_predictions 190 unknown_predictions 10 accuracy: 95.95959595959596
current_samples 199 correct_predictions 191 unknown_predictions 10 accuracy: 95.97989949748744
current_samples 200 correct_predictions 192 unknown_predictions 10 accuracy: 96.0
Model could not find the proper name for dataset_evaluate\Person02\person02150+0+60.jpg | Prediction Name - unknown
current_samples 200 correct_predictions 192 unknown_predictions 11 accuracy: 96.0
current_samples 201 correct_predictions 193 unknown_predictions 11 accuracy: 96.01990049751244
Model could not find the proper name for dataset_evaluate\Person02\person02153+15-90.jpg | Prediction Name - unknown
current_samples 201 correct_predictions 193 unknown_predictions 12 accuracy: 96.01990049751244
current_samples 202 correct_predictions 194 unknown_predictions 12 accuracy: 96.03960396039604
current_samples 203 correct_predictions 195 unknown_predictions 12 accuracy: 96.05911330049261
current_samples 204 correct_predictions 196 unknown_predictions 12 accuracy: 96.07843137254902
current_samples 205 correct_predictions 197 unknown_predictions 12 accuracy: 96.09756097560975
current_samples 206 correct_predictions 198 unknown_predictions 12 accuracy: 96.11650485436894
current_samples 207 correct_predictions 199 unknown_predictions 12 accuracy: 96.1352657004831
current_samples 208 correct_predictions 200 unknown_predictions 12 accuracy: 96.15384615384616
current_samples 209 correct_predictions 201 unknown_predictions 12 accuracy: 96.17224880382776
current_samples 210 correct_predictions 202 unknown_predictions 12 accuracy: 96.19047619047619
current_samples 211 correct_predictions 203 unknown_predictions 12 accuracy: 96.2085308056872
current_samples 212 correct_predictions 204 unknown_predictions 12 accuracy: 96.22641509433963
Invalid Prediction for dataset_evaluate\Person02\person02165+15+90.jpg | Prediction Name - person01
current_samples 213 correct_predictions 204 unknown_predictions 12 accuracy: 95.77464788732394
Model could not find the proper name for dataset_evaluate\Person02\person02166+30-90.jpg | Prediction Name - unknown
current_samples 213 correct_predictions 204 unknown_predictions 13 accuracy: 95.77464788732394
current_samples 214 correct_predictions 205 unknown_predictions 13 accuracy: 95.7943925233645
current_samples 215 correct_predictions 206 unknown_predictions 13 accuracy: 95.81395348837209
current_samples 216 correct_predictions 207 unknown_predictions 13 accuracy: 95.83333333333334
current_samples 217 correct_predictions 208 unknown_predictions 13 accuracy: 95.85253456221197
current_samples 218 correct_predictions 209 unknown_predictions 13 accuracy: 95.87155963302753
current_samples 219 correct_predictions 210 unknown_predictions 13 accuracy: 95.8904109589041
current_samples 220 correct_predictions 211 unknown_predictions 13 accuracy: 95.9090909090909
current_samples 221 correct_predictions 212 unknown_predictions 13 accuracy: 95.92760180995475
current_samples 222 correct_predictions 213 unknown_predictions 13 accuracy: 95.94594594594594
Invalid Prediction for dataset_evaluate\Person02\person02176+30+60.jpg | Prediction Name - person01
current_samples 223 correct_predictions 213 unknown_predictions 13 accuracy: 95.51569506726457
current_samples 224 correct_predictions 214 unknown_predictions 13 accuracy: 95.53571428571429
current_samples 225 correct_predictions 215 unknown_predictions 13 accuracy: 95.55555555555556
current_samples 226 correct_predictions 216 unknown_predictions 13 accuracy: 95.57522123893806
current_samples 227 correct_predictions 217 unknown_predictions 13 accuracy: 95.59471365638767
Model could not find the proper name for dataset_evaluate\Person02\person02181+60-60.jpg | Prediction Name - unknown
current_samples 227 correct_predictions 217 unknown_predictions 14 accuracy: 95.59471365638767
current_samples 228 correct_predictions 218 unknown_predictions 14 accuracy: 95.6140350877193
current_samples 229 correct_predictions 219 unknown_predictions 14 accuracy: 95.63318777292577
Model could not find the proper name for dataset_evaluate\Person02\person02184+60-15.jpg | Prediction Name - unknown
current_samples 229 correct_predictions 219 unknown_predictions 15 accuracy: 95.63318777292577
current_samples 230 correct_predictions 220 unknown_predictions 15 accuracy: 95.65217391304348
current_samples 231 correct_predictions 221 unknown_predictions 15 accuracy: 95.67099567099568
current_samples 232 correct_predictions 222 unknown_predictions 15 accuracy: 95.6896551724138
current_samples 233 correct_predictions 223 unknown_predictions 15 accuracy: 95.70815450643777
current_samples 234 correct_predictions 224 unknown_predictions 15 accuracy: 95.72649572649573
current_samples 235 correct_predictions 225 unknown_predictions 15 accuracy: 95.74468085106383
Invalid Prediction for dataset_evaluate\Person02\person02191+60+90.jpg | Prediction Name - person01
current_samples 236 correct_predictions 225 unknown_predictions 15 accuracy: 95.33898305084746
Model could not find the proper name for dataset_evaluate\Person02\person02192+90+0.jpg | Prediction Name - unknown
current_samples 236 correct_predictions 225 unknown_predictions 16 accuracy: 95.33898305084746
Model could not find the proper name for dataset_evaluate\Person02\person02201-60-90.jpg | Prediction Name - unknown
current_samples 236 correct_predictions 225 unknown_predictions 17 accuracy: 95.33898305084746
Model could not find the proper name for dataset_evaluate\Person02\person02204-60-45.jpg | Prediction Name - unknown
current_samples 236 correct_predictions 225 unknown_predictions 18 accuracy: 95.33898305084746
current_samples 237 correct_predictions 226 unknown_predictions 18 accuracy: 95.35864978902954
Model could not find the proper name for dataset_evaluate\Person02\person02206-60-15.jpg | Prediction Name - unknown
current_samples 237 correct_predictions 226 unknown_predictions 19 accuracy: 95.35864978902954
current_samples 238 correct_predictions 227 unknown_predictions 19 accuracy: 95.37815126050421
current_samples 239 correct_predictions 228 unknown_predictions 19 accuracy: 95.39748953974896
Model could not find the proper name for dataset_evaluate\Person02\person02209-60+30.jpg | Prediction Name - unknown
current_samples 239 correct_predictions 228 unknown_predictions 20 accuracy: 95.39748953974896
current_samples 240 correct_predictions 229 unknown_predictions 20 accuracy: 95.41666666666667
current_samples 241 correct_predictions 230 unknown_predictions 20 accuracy: 95.4356846473029
Model could not find the proper name for dataset_evaluate\Person02\person02216-30-60.jpg | Prediction Name - unknown
current_samples 241 correct_predictions 230 unknown_predictions 21 accuracy: 95.4356846473029
Model could not find the proper name for dataset_evaluate\Person02\person02217-30-45.jpg | Prediction Name - unknown
current_samples 241 correct_predictions 230 unknown_predictions 22 accuracy: 95.4356846473029
current_samples 242 correct_predictions 231 unknown_predictions 22 accuracy: 95.45454545454545
Invalid Prediction for dataset_evaluate\Person02\person02219-30-15.jpg | Prediction Name - person01
current_samples 243 correct_predictions 231 unknown_predictions 22 accuracy: 95.06172839506173
current_samples 244 correct_predictions 232 unknown_predictions 22 accuracy: 95.08196721311475
current_samples 245 correct_predictions 233 unknown_predictions 22 accuracy: 95.10204081632652
current_samples 246 correct_predictions 234 unknown_predictions 22 accuracy: 95.1219512195122
current_samples 247 correct_predictions 235 unknown_predictions 22 accuracy: 95.1417004048583
current_samples 248 correct_predictions 236 unknown_predictions 22 accuracy: 95.16129032258065
current_samples 249 correct_predictions 237 unknown_predictions 22 accuracy: 95.18072289156626
current_samples 250 correct_predictions 238 unknown_predictions 22 accuracy: 95.19999999999999
current_samples 251 correct_predictions 239 unknown_predictions 22 accuracy: 95.2191235059761
current_samples 252 correct_predictions 240 unknown_predictions 22 accuracy: 95.23809523809523
current_samples 253 correct_predictions 241 unknown_predictions 22 accuracy: 95.25691699604744
current_samples 254 correct_predictions 242 unknown_predictions 22 accuracy: 95.2755905511811
current_samples 255 correct_predictions 243 unknown_predictions 22 accuracy: 95.29411764705881
current_samples 256 correct_predictions 244 unknown_predictions 22 accuracy: 95.3125
Model could not find the proper name for dataset_evaluate\Person02\person02240+0-90.jpg | Prediction Name - unknown
current_samples 256 correct_predictions 244 unknown_predictions 23 accuracy: 95.3125
current_samples 257 correct_predictions 245 unknown_predictions 23 accuracy: 95.3307392996109
current_samples 258 correct_predictions 246 unknown_predictions 23 accuracy: 95.34883720930233
Invalid Prediction for dataset_evaluate\Person02\person02243+0-45.jpg | Prediction Name - person01
current_samples 259 correct_predictions 246 unknown_predictions 23 accuracy: 94.98069498069498
current_samples 260 correct_predictions 247 unknown_predictions 23 accuracy: 95.0
current_samples 261 correct_predictions 248 unknown_predictions 23 accuracy: 95.01915708812261
current_samples 262 correct_predictions 249 unknown_predictions 23 accuracy: 95.0381679389313
current_samples 263 correct_predictions 250 unknown_predictions 23 accuracy: 95.05703422053232
current_samples 264 correct_predictions 251 unknown_predictions 23 accuracy: 95.07575757575758
current_samples 265 correct_predictions 252 unknown_predictions 23 accuracy: 95.09433962264151
Model could not find the proper name for dataset_evaluate\Person02\person02250+0+60.jpg | Prediction Name - unknown
current_samples 265 correct_predictions 252 unknown_predictions 24 accuracy: 95.09433962264151
current_samples 266 correct_predictions 253 unknown_predictions 24 accuracy: 95.11278195488721
current_samples 267 correct_predictions 254 unknown_predictions 24 accuracy: 95.13108614232209
current_samples 268 correct_predictions 255 unknown_predictions 24 accuracy: 95.1492537313433
current_samples 269 correct_predictions 256 unknown_predictions 24 accuracy: 95.16728624535315
current_samples 270 correct_predictions 257 unknown_predictions 24 accuracy: 95.18518518518519
current_samples 271 correct_predictions 258 unknown_predictions 24 accuracy: 95.20295202952029
current_samples 272 correct_predictions 259 unknown_predictions 24 accuracy: 95.22058823529412
current_samples 273 correct_predictions 260 unknown_predictions 24 accuracy: 95.23809523809523
current_samples 274 correct_predictions 261 unknown_predictions 24 accuracy: 95.25547445255475
current_samples 275 correct_predictions 262 unknown_predictions 24 accuracy: 95.27272727272728
current_samples 276 correct_predictions 263 unknown_predictions 24 accuracy: 95.28985507246377
current_samples 277 correct_predictions 264 unknown_predictions 24 accuracy: 95.30685920577618
current_samples 278 correct_predictions 265 unknown_predictions 24 accuracy: 95.32374100719424
current_samples 279 correct_predictions 266 unknown_predictions 24 accuracy: 95.3405017921147
Model could not find the proper name for dataset_evaluate\Person02\person02276+30+60.jpg | Prediction Name - unknown
current_samples 279 correct_predictions 266 unknown_predictions 25 accuracy: 95.3405017921147
Model could not find the proper name for dataset_evaluate\Person02\person02281+60-60.jpg | Prediction Name - unknown
current_samples 279 correct_predictions 266 unknown_predictions 26 accuracy: 95.3405017921147
Model could not find the proper name for dataset_evaluate\Person02\person02283+60-30.jpg | Prediction Name - unknown
current_samples 279 correct_predictions 266 unknown_predictions 27 accuracy: 95.3405017921147
current_samples 280 correct_predictions 267 unknown_predictions 27 accuracy: 95.35714285714286
current_samples 281 correct_predictions 268 unknown_predictions 27 accuracy: 95.37366548042705
current_samples 282 correct_predictions 269 unknown_predictions 27 accuracy: 95.39007092198581
current_samples 283 correct_predictions 270 unknown_predictions 27 accuracy: 95.40636042402826
current_samples 284 correct_predictions 271 unknown_predictions 27 accuracy: 95.4225352112676
Invalid Prediction for dataset_evaluate\Person03\person03100-90+0.jpg | Prediction Name - person01
current_samples 285 correct_predictions 271 unknown_predictions 27 accuracy: 95.08771929824562
Model could not find the proper name for dataset_evaluate\Person03\person03101-60-90.jpg | Prediction Name - unknown
current_samples 285 correct_predictions 271 unknown_predictions 28 accuracy: 95.08771929824562
current_samples 286 correct_predictions 272 unknown_predictions 28 accuracy: 95.1048951048951
current_samples 287 correct_predictions 273 unknown_predictions 28 accuracy: 95.1219512195122
current_samples 288 correct_predictions 274 unknown_predictions 28 accuracy: 95.13888888888889
Invalid Prediction for dataset_evaluate\Person03\person03105-60-30.jpg | Prediction Name - person01
current_samples 289 correct_predictions 274 unknown_predictions 28 accuracy: 94.80968858131487
current_samples 290 correct_predictions 275 unknown_predictions 28 accuracy: 94.82758620689656
Invalid Prediction for dataset_evaluate\Person03\person03107-60+0.jpg | Prediction Name - person01
current_samples 291 correct_predictions 275 unknown_predictions 28 accuracy: 94.50171821305841
current_samples 292 correct_predictions 276 unknown_predictions 28 accuracy: 94.52054794520548
Invalid Prediction for dataset_evaluate\Person03\person03109-60+30.jpg | Prediction Name - person09
current_samples 293 correct_predictions 276 unknown_predictions 28 accuracy: 94.19795221843003
Invalid Prediction for dataset_evaluate\Person03\person03110-60+45.jpg | Prediction Name - person04
current_samples 294 correct_predictions 276 unknown_predictions 28 accuracy: 93.87755102040816
current_samples 295 correct_predictions 277 unknown_predictions 28 accuracy: 93.89830508474576
current_samples 296 correct_predictions 278 unknown_predictions 28 accuracy: 93.91891891891892
current_samples 297 correct_predictions 279 unknown_predictions 28 accuracy: 93.93939393939394
current_samples 298 correct_predictions 280 unknown_predictions 28 accuracy: 93.95973154362416
current_samples 299 correct_predictions 281 unknown_predictions 28 accuracy: 93.9799331103679
current_samples 300 correct_predictions 282 unknown_predictions 28 accuracy: 94.0
current_samples 301 correct_predictions 283 unknown_predictions 28 accuracy: 94.01993355481729
current_samples 302 correct_predictions 284 unknown_predictions 28 accuracy: 94.03973509933775
current_samples 303 correct_predictions 285 unknown_predictions 28 accuracy: 94.05940594059405
current_samples 304 correct_predictions 286 unknown_predictions 28 accuracy: 94.07894736842105
current_samples 305 correct_predictions 287 unknown_predictions 28 accuracy: 94.09836065573771
Invalid Prediction for dataset_evaluate\Person03\person03125-30+75.jpg | Prediction Name - person09
current_samples 306 correct_predictions 287 unknown_predictions 28 accuracy: 93.79084967320262
current_samples 307 correct_predictions 288 unknown_predictions 28 accuracy: 93.81107491856677
Invalid Prediction for dataset_evaluate\Person03\person03127-15-90.jpg | Prediction Name - person01
current_samples 308 correct_predictions 288 unknown_predictions 28 accuracy: 93.5064935064935
current_samples 309 correct_predictions 289 unknown_predictions 28 accuracy: 93.52750809061489
current_samples 310 correct_predictions 290 unknown_predictions 28 accuracy: 93.54838709677419
current_samples 311 correct_predictions 291 unknown_predictions 28 accuracy: 93.56913183279742
Invalid Prediction for dataset_evaluate\Person03\person03131-15-30.jpg | Prediction Name - person01
current_samples 312 correct_predictions 291 unknown_predictions 28 accuracy: 93.26923076923077
current_samples 313 correct_predictions 292 unknown_predictions 28 accuracy: 93.29073482428115
current_samples 314 correct_predictions 293 unknown_predictions 28 accuracy: 93.31210191082803
current_samples 315 correct_predictions 294 unknown_predictions 28 accuracy: 93.33333333333333
current_samples 316 correct_predictions 295 unknown_predictions 28 accuracy: 93.35443037974683
current_samples 317 correct_predictions 296 unknown_predictions 28 accuracy: 93.37539432176656
current_samples 318 correct_predictions 297 unknown_predictions 28 accuracy: 93.39622641509435
current_samples 319 correct_predictions 298 unknown_predictions 28 accuracy: 93.41692789968651
current_samples 320 correct_predictions 299 unknown_predictions 28 accuracy: 93.4375
current_samples 321 correct_predictions 300 unknown_predictions 28 accuracy: 93.45794392523365
current_samples 322 correct_predictions 301 unknown_predictions 28 accuracy: 93.47826086956522
current_samples 323 correct_predictions 302 unknown_predictions 28 accuracy: 93.49845201238391
current_samples 324 correct_predictions 303 unknown_predictions 28 accuracy: 93.51851851851852
current_samples 325 correct_predictions 304 unknown_predictions 28 accuracy: 93.53846153846153
current_samples 326 correct_predictions 305 unknown_predictions 28 accuracy: 93.55828220858896
current_samples 327 correct_predictions 306 unknown_predictions 28 accuracy: 93.57798165137615
current_samples 328 correct_predictions 307 unknown_predictions 28 accuracy: 93.59756097560977
Invalid Prediction for dataset_evaluate\Person03\person03148+0+30.jpg | Prediction Name - person01
current_samples 329 correct_predictions 307 unknown_predictions 28 accuracy: 93.3130699088146
current_samples 330 correct_predictions 308 unknown_predictions 28 accuracy: 93.33333333333333
current_samples 331 correct_predictions 309 unknown_predictions 28 accuracy: 93.35347432024169
current_samples 332 correct_predictions 310 unknown_predictions 28 accuracy: 93.37349397590361
current_samples 333 correct_predictions 311 unknown_predictions 28 accuracy: 93.3933933933934
current_samples 334 correct_predictions 312 unknown_predictions 28 accuracy: 93.41317365269461
current_samples 335 correct_predictions 313 unknown_predictions 28 accuracy: 93.43283582089552
current_samples 336 correct_predictions 314 unknown_predictions 28 accuracy: 93.45238095238095
current_samples 337 correct_predictions 315 unknown_predictions 28 accuracy: 93.47181008902076
current_samples 338 correct_predictions 316 unknown_predictions 28 accuracy: 93.49112426035504
current_samples 339 correct_predictions 317 unknown_predictions 28 accuracy: 93.5103244837758
current_samples 340 correct_predictions 318 unknown_predictions 28 accuracy: 93.52941176470588
current_samples 341 correct_predictions 319 unknown_predictions 28 accuracy: 93.54838709677419
current_samples 342 correct_predictions 320 unknown_predictions 28 accuracy: 93.56725146198829
current_samples 343 correct_predictions 321 unknown_predictions 28 accuracy: 93.58600583090379
current_samples 344 correct_predictions 322 unknown_predictions 28 accuracy: 93.6046511627907
current_samples 345 correct_predictions 323 unknown_predictions 28 accuracy: 93.6231884057971
Model could not find the proper name for dataset_evaluate\Person03\person03165+15+90.jpg | Prediction Name - unknown
current_samples 345 correct_predictions 323 unknown_predictions 29 accuracy: 93.6231884057971
current_samples 346 correct_predictions 324 unknown_predictions 29 accuracy: 93.64161849710982
current_samples 347 correct_predictions 325 unknown_predictions 29 accuracy: 93.65994236311239
current_samples 348 correct_predictions 326 unknown_predictions 29 accuracy: 93.67816091954023
current_samples 349 correct_predictions 327 unknown_predictions 29 accuracy: 93.69627507163324
current_samples 350 correct_predictions 328 unknown_predictions 29 accuracy: 93.71428571428572
current_samples 351 correct_predictions 329 unknown_predictions 29 accuracy: 93.73219373219374
current_samples 352 correct_predictions 330 unknown_predictions 29 accuracy: 93.75
current_samples 353 correct_predictions 331 unknown_predictions 29 accuracy: 93.76770538243626
current_samples 354 correct_predictions 332 unknown_predictions 29 accuracy: 93.78531073446328
current_samples 355 correct_predictions 333 unknown_predictions 29 accuracy: 93.80281690140845
current_samples 356 correct_predictions 334 unknown_predictions 29 accuracy: 93.82022471910112
current_samples 357 correct_predictions 335 unknown_predictions 29 accuracy: 93.8375350140056
current_samples 358 correct_predictions 336 unknown_predictions 29 accuracy: 93.85474860335195
Invalid Prediction for dataset_evaluate\Person03\person03179+60-90.jpg | Prediction Name - person02
current_samples 359 correct_predictions 336 unknown_predictions 29 accuracy: 93.59331476323119
current_samples 360 correct_predictions 337 unknown_predictions 29 accuracy: 93.61111111111111
current_samples 361 correct_predictions 338 unknown_predictions 29 accuracy: 93.62880886426593
current_samples 362 correct_predictions 339 unknown_predictions 29 accuracy: 93.646408839779
Model could not find the proper name for dataset_evaluate\Person03\person03183+60-30.jpg | Prediction Name - unknown
current_samples 362 correct_predictions 339 unknown_predictions 30 accuracy: 93.646408839779
current_samples 363 correct_predictions 340 unknown_predictions 30 accuracy: 93.66391184573003
current_samples 364 correct_predictions 341 unknown_predictions 30 accuracy: 93.68131868131869
current_samples 365 correct_predictions 342 unknown_predictions 30 accuracy: 93.69863013698631
Model could not find the proper name for dataset_evaluate\Person03\person03187+60+30.jpg | Prediction Name - unknown
current_samples 365 correct_predictions 342 unknown_predictions 31 accuracy: 93.69863013698631
current_samples 366 correct_predictions 343 unknown_predictions 31 accuracy: 93.71584699453553
current_samples 367 correct_predictions 344 unknown_predictions 31 accuracy: 93.73297002724796
current_samples 368 correct_predictions 345 unknown_predictions 31 accuracy: 93.75
current_samples 369 correct_predictions 346 unknown_predictions 31 accuracy: 93.76693766937669
current_samples 370 correct_predictions 347 unknown_predictions 31 accuracy: 93.78378378378378
Invalid Prediction for dataset_evaluate\Person03\person03202-60-75.jpg | Prediction Name - person02
current_samples 371 correct_predictions 347 unknown_predictions 31 accuracy: 93.53099730458221
Invalid Prediction for dataset_evaluate\Person03\person03203-60-60.jpg | Prediction Name - person08
current_samples 372 correct_predictions 347 unknown_predictions 31 accuracy: 93.27956989247312
current_samples 373 correct_predictions 348 unknown_predictions 31 accuracy: 93.2975871313673
current_samples 374 correct_predictions 349 unknown_predictions 31 accuracy: 93.31550802139037
current_samples 375 correct_predictions 350 unknown_predictions 31 accuracy: 93.33333333333333
current_samples 376 correct_predictions 351 unknown_predictions 31 accuracy: 93.35106382978722
current_samples 377 correct_predictions 352 unknown_predictions 31 accuracy: 93.36870026525199
current_samples 378 correct_predictions 353 unknown_predictions 31 accuracy: 93.38624338624338
current_samples 379 correct_predictions 354 unknown_predictions 31 accuracy: 93.40369393139841
current_samples 380 correct_predictions 355 unknown_predictions 31 accuracy: 93.42105263157895
current_samples 381 correct_predictions 356 unknown_predictions 31 accuracy: 93.43832020997375
current_samples 382 correct_predictions 357 unknown_predictions 31 accuracy: 93.45549738219894
current_samples 383 correct_predictions 358 unknown_predictions 31 accuracy: 93.47258485639686
current_samples 384 correct_predictions 359 unknown_predictions 31 accuracy: 93.48958333333334
current_samples 385 correct_predictions 360 unknown_predictions 31 accuracy: 93.5064935064935
current_samples 386 correct_predictions 361 unknown_predictions 31 accuracy: 93.52331606217616
current_samples 387 correct_predictions 362 unknown_predictions 31 accuracy: 93.54005167958657
current_samples 388 correct_predictions 363 unknown_predictions 31 accuracy: 93.55670103092784
current_samples 389 correct_predictions 364 unknown_predictions 31 accuracy: 93.573264781491
current_samples 390 correct_predictions 365 unknown_predictions 31 accuracy: 93.58974358974359
current_samples 391 correct_predictions 366 unknown_predictions 31 accuracy: 93.60613810741688
current_samples 392 correct_predictions 367 unknown_predictions 31 accuracy: 93.62244897959184
current_samples 393 correct_predictions 368 unknown_predictions 31 accuracy: 93.63867684478372
current_samples 394 correct_predictions 369 unknown_predictions 31 accuracy: 93.65482233502537
current_samples 395 correct_predictions 370 unknown_predictions 31 accuracy: 93.67088607594937
current_samples 396 correct_predictions 371 unknown_predictions 31 accuracy: 93.68686868686868
current_samples 397 correct_predictions 372 unknown_predictions 31 accuracy: 93.70277078085643
current_samples 398 correct_predictions 373 unknown_predictions 31 accuracy: 93.71859296482413
current_samples 399 correct_predictions 374 unknown_predictions 31 accuracy: 93.734335839599
current_samples 400 correct_predictions 375 unknown_predictions 31 accuracy: 93.75
current_samples 401 correct_predictions 376 unknown_predictions 31 accuracy: 93.76558603491272
current_samples 402 correct_predictions 377 unknown_predictions 31 accuracy: 93.78109452736318
current_samples 403 correct_predictions 378 unknown_predictions 31 accuracy: 93.79652605459057
current_samples 404 correct_predictions 379 unknown_predictions 31 accuracy: 93.8118811881188
current_samples 405 correct_predictions 380 unknown_predictions 31 accuracy: 93.82716049382715
current_samples 406 correct_predictions 381 unknown_predictions 31 accuracy: 93.8423645320197
current_samples 407 correct_predictions 382 unknown_predictions 31 accuracy: 93.85749385749385
current_samples 408 correct_predictions 383 unknown_predictions 31 accuracy: 93.87254901960785
current_samples 409 correct_predictions 384 unknown_predictions 31 accuracy: 93.8875305623472
current_samples 410 correct_predictions 385 unknown_predictions 31 accuracy: 93.90243902439023
current_samples 411 correct_predictions 386 unknown_predictions 31 accuracy: 93.91727493917274
current_samples 412 correct_predictions 387 unknown_predictions 31 accuracy: 93.93203883495146
current_samples 413 correct_predictions 388 unknown_predictions 31 accuracy: 93.94673123486683
current_samples 414 correct_predictions 389 unknown_predictions 31 accuracy: 93.96135265700482
current_samples 415 correct_predictions 390 unknown_predictions 31 accuracy: 93.97590361445783
current_samples 416 correct_predictions 391 unknown_predictions 31 accuracy: 93.99038461538461
current_samples 417 correct_predictions 392 unknown_predictions 31 accuracy: 94.00479616306954
current_samples 418 correct_predictions 393 unknown_predictions 31 accuracy: 94.01913875598086
current_samples 419 correct_predictions 394 unknown_predictions 31 accuracy: 94.03341288782816
current_samples 420 correct_predictions 395 unknown_predictions 31 accuracy: 94.04761904761905
current_samples 421 correct_predictions 396 unknown_predictions 31 accuracy: 94.06175771971496
current_samples 422 correct_predictions 397 unknown_predictions 31 accuracy: 94.07582938388626
current_samples 423 correct_predictions 398 unknown_predictions 31 accuracy: 94.08983451536643
current_samples 424 correct_predictions 399 unknown_predictions 31 accuracy: 94.10377358490565
current_samples 425 correct_predictions 400 unknown_predictions 31 accuracy: 94.11764705882352
current_samples 426 correct_predictions 401 unknown_predictions 31 accuracy: 94.13145539906104
current_samples 427 correct_predictions 402 unknown_predictions 31 accuracy: 94.14519906323186
current_samples 428 correct_predictions 403 unknown_predictions 31 accuracy: 94.1588785046729
current_samples 429 correct_predictions 404 unknown_predictions 31 accuracy: 94.17249417249417
current_samples 430 correct_predictions 405 unknown_predictions 31 accuracy: 94.18604651162791
current_samples 431 correct_predictions 406 unknown_predictions 31 accuracy: 94.19953596287704
current_samples 432 correct_predictions 407 unknown_predictions 31 accuracy: 94.21296296296296
current_samples 433 correct_predictions 408 unknown_predictions 31 accuracy: 94.22632794457274
current_samples 434 correct_predictions 409 unknown_predictions 31 accuracy: 94.23963133640552
current_samples 435 correct_predictions 410 unknown_predictions 31 accuracy: 94.25287356321839
current_samples 436 correct_predictions 411 unknown_predictions 31 accuracy: 94.26605504587155
current_samples 437 correct_predictions 412 unknown_predictions 31 accuracy: 94.27917620137299
current_samples 438 correct_predictions 413 unknown_predictions 31 accuracy: 94.29223744292237
current_samples 439 correct_predictions 414 unknown_predictions 31 accuracy: 94.30523917995444
current_samples 440 correct_predictions 415 unknown_predictions 31 accuracy: 94.31818181818183
current_samples 441 correct_predictions 416 unknown_predictions 31 accuracy: 94.33106575963718
Invalid Prediction for dataset_evaluate\Person03\person03276+30+60.jpg | Prediction Name - person02
current_samples 442 correct_predictions 416 unknown_predictions 31 accuracy: 94.11764705882352
current_samples 443 correct_predictions 417 unknown_predictions 31 accuracy: 94.13092550790067
current_samples 444 correct_predictions 418 unknown_predictions 31 accuracy: 94.14414414414415
current_samples 445 correct_predictions 419 unknown_predictions 31 accuracy: 94.15730337078652
current_samples 446 correct_predictions 420 unknown_predictions 31 accuracy: 94.17040358744396
current_samples 447 correct_predictions 421 unknown_predictions 31 accuracy: 94.1834451901566
current_samples 448 correct_predictions 422 unknown_predictions 31 accuracy: 94.19642857142857
current_samples 449 correct_predictions 423 unknown_predictions 31 accuracy: 94.20935412026726
current_samples 450 correct_predictions 424 unknown_predictions 31 accuracy: 94.22222222222221
Model could not find the proper name for dataset_evaluate\Person03\person03285+60+0.jpg | Prediction Name - unknown
current_samples 450 correct_predictions 424 unknown_predictions 32 accuracy: 94.22222222222221
current_samples 451 correct_predictions 425 unknown_predictions 32 accuracy: 94.2350332594235
current_samples 452 correct_predictions 426 unknown_predictions 32 accuracy: 94.24778761061947
current_samples 453 correct_predictions 427 unknown_predictions 32 accuracy: 94.26048565121413
current_samples 454 correct_predictions 428 unknown_predictions 32 accuracy: 94.27312775330397
current_samples 455 correct_predictions 429 unknown_predictions 32 accuracy: 94.28571428571428
current_samples 456 correct_predictions 430 unknown_predictions 32 accuracy: 94.2982456140351
Invalid Prediction for dataset_evaluate\Person04\person04100-90+0.jpg | Prediction Name - person10
current_samples 457 correct_predictions 430 unknown_predictions 32 accuracy: 94.09190371991247
Invalid Prediction for dataset_evaluate\Person04\person04101-60-90.jpg | Prediction Name - person02
current_samples 458 correct_predictions 430 unknown_predictions 32 accuracy: 93.88646288209607
current_samples 459 correct_predictions 431 unknown_predictions 32 accuracy: 93.89978213507625
current_samples 460 correct_predictions 432 unknown_predictions 32 accuracy: 93.91304347826087
Invalid Prediction for dataset_evaluate\Person04\person04104-60-45.jpg | Prediction Name - person03
current_samples 461 correct_predictions 432 unknown_predictions 32 accuracy: 93.70932754880694
current_samples 462 correct_predictions 433 unknown_predictions 32 accuracy: 93.72294372294373
current_samples 463 correct_predictions 434 unknown_predictions 32 accuracy: 93.73650107991361
current_samples 464 correct_predictions 435 unknown_predictions 32 accuracy: 93.75
current_samples 465 correct_predictions 436 unknown_predictions 32 accuracy: 93.76344086021506
Invalid Prediction for dataset_evaluate\Person04\person04109-60+30.jpg | Prediction Name - person02
current_samples 466 correct_predictions 436 unknown_predictions 32 accuracy: 93.56223175965665
Invalid Prediction for dataset_evaluate\Person04\person04110-60+45.jpg | Prediction Name - person02
current_samples 467 correct_predictions 436 unknown_predictions 32 accuracy: 93.36188436830835
current_samples 468 correct_predictions 437 unknown_predictions 32 accuracy: 93.37606837606837
current_samples 469 correct_predictions 438 unknown_predictions 32 accuracy: 93.39019189765459
current_samples 470 correct_predictions 439 unknown_predictions 32 accuracy: 93.40425531914893
current_samples 471 correct_predictions 440 unknown_predictions 32 accuracy: 93.41825902335457
current_samples 472 correct_predictions 441 unknown_predictions 32 accuracy: 93.4322033898305
current_samples 473 correct_predictions 442 unknown_predictions 32 accuracy: 93.44608879492601
current_samples 474 correct_predictions 443 unknown_predictions 32 accuracy: 93.45991561181435
current_samples 475 correct_predictions 444 unknown_predictions 32 accuracy: 93.47368421052632
current_samples 476 correct_predictions 445 unknown_predictions 32 accuracy: 93.4873949579832
Invalid Prediction for dataset_evaluate\Person04\person04120-30+0.jpg | Prediction Name - person10
current_samples 477 correct_predictions 445 unknown_predictions 32 accuracy: 93.29140461215934
current_samples 478 correct_predictions 446 unknown_predictions 32 accuracy: 93.30543933054393
current_samples 479 correct_predictions 447 unknown_predictions 32 accuracy: 93.31941544885177
current_samples 480 correct_predictions 448 unknown_predictions 32 accuracy: 93.33333333333333
current_samples 481 correct_predictions 449 unknown_predictions 32 accuracy: 93.34719334719335
current_samples 482 correct_predictions 450 unknown_predictions 32 accuracy: 93.3609958506224
current_samples 483 correct_predictions 451 unknown_predictions 32 accuracy: 93.37474120082815
Invalid Prediction for dataset_evaluate\Person04\person04127-15-90.jpg | Prediction Name - person02
current_samples 484 correct_predictions 451 unknown_predictions 32 accuracy: 93.18181818181817
current_samples 485 correct_predictions 452 unknown_predictions 32 accuracy: 93.19587628865979
current_samples 486 correct_predictions 453 unknown_predictions 32 accuracy: 93.20987654320987
current_samples 487 correct_predictions 454 unknown_predictions 32 accuracy: 93.22381930184805
current_samples 488 correct_predictions 455 unknown_predictions 32 accuracy: 93.23770491803278
current_samples 489 correct_predictions 456 unknown_predictions 32 accuracy: 93.25153374233128
current_samples 490 correct_predictions 457 unknown_predictions 32 accuracy: 93.26530612244898
current_samples 491 correct_predictions 458 unknown_predictions 32 accuracy: 93.27902240325867
current_samples 492 correct_predictions 459 unknown_predictions 32 accuracy: 93.29268292682927
current_samples 493 correct_predictions 460 unknown_predictions 32 accuracy: 93.30628803245436
current_samples 494 correct_predictions 461 unknown_predictions 32 accuracy: 93.31983805668015
current_samples 495 correct_predictions 462 unknown_predictions 32 accuracy: 93.33333333333333
Invalid Prediction for dataset_evaluate\Person04\person04139-15+90.jpg | Prediction Name - person02
current_samples 496 correct_predictions 462 unknown_predictions 32 accuracy: 93.14516129032258
current_samples 497 correct_predictions 463 unknown_predictions 32 accuracy: 93.158953722334
Invalid Prediction for dataset_evaluate\Person04\person04141+0-75.jpg | Prediction Name - person02
current_samples 498 correct_predictions 463 unknown_predictions 32 accuracy: 92.9718875502008
current_samples 499 correct_predictions 464 unknown_predictions 32 accuracy: 92.98597194388778
current_samples 500 correct_predictions 465 unknown_predictions 32 accuracy: 93.0
Invalid Prediction for dataset_evaluate\Person04\person04144+0-30.jpg | Prediction Name - person02
current_samples 501 correct_predictions 465 unknown_predictions 32 accuracy: 92.81437125748504
current_samples 502 correct_predictions 466 unknown_predictions 32 accuracy: 92.82868525896414
current_samples 503 correct_predictions 467 unknown_predictions 32 accuracy: 92.84294234592446
current_samples 504 correct_predictions 468 unknown_predictions 32 accuracy: 92.85714285714286
current_samples 505 correct_predictions 469 unknown_predictions 32 accuracy: 92.87128712871288
Invalid Prediction for dataset_evaluate\Person04\person04149+0+45.jpg | Prediction Name - person02
current_samples 506 correct_predictions 469 unknown_predictions 32 accuracy: 92.68774703557312
current_samples 507 correct_predictions 470 unknown_predictions 32 accuracy: 92.70216962524654
current_samples 508 correct_predictions 471 unknown_predictions 32 accuracy: 92.71653543307087
current_samples 509 correct_predictions 472 unknown_predictions 32 accuracy: 92.73084479371316
current_samples 510 correct_predictions 473 unknown_predictions 32 accuracy: 92.74509803921569
Invalid Prediction for dataset_evaluate\Person04\person04154+15-75.jpg | Prediction Name - person02
current_samples 511 correct_predictions 473 unknown_predictions 32 accuracy: 92.56360078277886
current_samples 512 correct_predictions 474 unknown_predictions 32 accuracy: 92.578125
current_samples 513 correct_predictions 475 unknown_predictions 32 accuracy: 92.5925925925926
current_samples 514 correct_predictions 476 unknown_predictions 32 accuracy: 92.60700389105058
current_samples 515 correct_predictions 477 unknown_predictions 32 accuracy: 92.62135922330097
current_samples 516 correct_predictions 478 unknown_predictions 32 accuracy: 92.63565891472868
current_samples 517 correct_predictions 479 unknown_predictions 32 accuracy: 92.64990328820116
current_samples 518 correct_predictions 480 unknown_predictions 32 accuracy: 92.66409266409266
current_samples 519 correct_predictions 481 unknown_predictions 32 accuracy: 92.67822736030828
current_samples 520 correct_predictions 482 unknown_predictions 32 accuracy: 92.6923076923077
Invalid Prediction for dataset_evaluate\Person04\person04164+15+75.jpg | Prediction Name - person01
current_samples 521 correct_predictions 482 unknown_predictions 32 accuracy: 92.51439539347409
current_samples 522 correct_predictions 483 unknown_predictions 32 accuracy: 92.52873563218391
Invalid Prediction for dataset_evaluate\Person04\person04166+30-90.jpg | Prediction Name - person02
current_samples 523 correct_predictions 483 unknown_predictions 32 accuracy: 92.35181644359464
current_samples 524 correct_predictions 484 unknown_predictions 32 accuracy: 92.36641221374046
current_samples 525 correct_predictions 485 unknown_predictions 32 accuracy: 92.38095238095238
Invalid Prediction for dataset_evaluate\Person04\person04169+30-45.jpg | Prediction Name - person02
current_samples 526 correct_predictions 485 unknown_predictions 32 accuracy: 92.20532319391636
current_samples 527 correct_predictions 486 unknown_predictions 32 accuracy: 92.22011385199241
Invalid Prediction for dataset_evaluate\Person04\person04171+30-15.jpg | Prediction Name - person02
current_samples 528 correct_predictions 486 unknown_predictions 32 accuracy: 92.04545454545455
current_samples 529 correct_predictions 487 unknown_predictions 32 accuracy: 92.06049149338375
current_samples 530 correct_predictions 488 unknown_predictions 32 accuracy: 92.0754716981132
Invalid Prediction for dataset_evaluate\Person04\person04174+30+30.jpg | Prediction Name - person02
current_samples 531 correct_predictions 488 unknown_predictions 32 accuracy: 91.90207156308851
current_samples 532 correct_predictions 489 unknown_predictions 32 accuracy: 91.9172932330827
current_samples 533 correct_predictions 490 unknown_predictions 32 accuracy: 91.93245778611632
current_samples 534 correct_predictions 491 unknown_predictions 32 accuracy: 91.94756554307116
Invalid Prediction for dataset_evaluate\Person04\person04178+30+90.jpg | Prediction Name - person02
current_samples 535 correct_predictions 491 unknown_predictions 32 accuracy: 91.77570093457945
Invalid Prediction for dataset_evaluate\Person04\person04179+60-90.jpg | Prediction Name - person03
current_samples 536 correct_predictions 491 unknown_predictions 32 accuracy: 91.6044776119403
current_samples 537 correct_predictions 492 unknown_predictions 32 accuracy: 91.62011173184358
current_samples 538 correct_predictions 493 unknown_predictions 32 accuracy: 91.635687732342
Invalid Prediction for dataset_evaluate\Person04\person04182+60-45.jpg | Prediction Name - person02
current_samples 539 correct_predictions 493 unknown_predictions 32 accuracy: 91.4656771799629
current_samples 540 correct_predictions 494 unknown_predictions 32 accuracy: 91.48148148148148
Invalid Prediction for dataset_evaluate\Person04\person04184+60-15.jpg | Prediction Name - person02
current_samples 541 correct_predictions 494 unknown_predictions 32 accuracy: 91.31238447319778
current_samples 542 correct_predictions 495 unknown_predictions 32 accuracy: 91.32841328413284
current_samples 543 correct_predictions 496 unknown_predictions 32 accuracy: 91.34438305709024
current_samples 544 correct_predictions 497 unknown_predictions 32 accuracy: 91.36029411764706
Invalid Prediction for dataset_evaluate\Person04\person04188+60+45.jpg | Prediction Name - person01
current_samples 545 correct_predictions 497 unknown_predictions 32 accuracy: 91.19266055045871
current_samples 546 correct_predictions 498 unknown_predictions 32 accuracy: 91.20879120879121
current_samples 547 correct_predictions 499 unknown_predictions 32 accuracy: 91.22486288848263
current_samples 548 correct_predictions 500 unknown_predictions 32 accuracy: 91.24087591240875
current_samples 549 correct_predictions 501 unknown_predictions 32 accuracy: 91.2568306010929
current_samples 550 correct_predictions 502 unknown_predictions 32 accuracy: 91.27272727272727
current_samples 551 correct_predictions 503 unknown_predictions 32 accuracy: 91.2885662431942
current_samples 552 correct_predictions 504 unknown_predictions 32 accuracy: 91.30434782608695
current_samples 553 correct_predictions 505 unknown_predictions 32 accuracy: 91.32007233273056
current_samples 554 correct_predictions 506 unknown_predictions 32 accuracy: 91.33574007220217
current_samples 555 correct_predictions 507 unknown_predictions 32 accuracy: 91.35135135135135
current_samples 556 correct_predictions 508 unknown_predictions 32 accuracy: 91.36690647482014
current_samples 557 correct_predictions 509 unknown_predictions 32 accuracy: 91.38240574506284
current_samples 558 correct_predictions 510 unknown_predictions 32 accuracy: 91.39784946236558
current_samples 559 correct_predictions 511 unknown_predictions 32 accuracy: 91.41323792486583
current_samples 560 correct_predictions 512 unknown_predictions 32 accuracy: 91.42857142857143
current_samples 561 correct_predictions 513 unknown_predictions 32 accuracy: 91.44385026737967
current_samples 562 correct_predictions 514 unknown_predictions 32 accuracy: 91.45907473309609
current_samples 563 correct_predictions 515 unknown_predictions 32 accuracy: 91.47424511545293
current_samples 564 correct_predictions 516 unknown_predictions 32 accuracy: 91.48936170212765
current_samples 565 correct_predictions 517 unknown_predictions 32 accuracy: 91.50442477876106
current_samples 566 correct_predictions 518 unknown_predictions 32 accuracy: 91.51943462897526
Invalid Prediction for dataset_evaluate\Person04\person04223-30+45.jpg | Prediction Name - person09
current_samples 567 correct_predictions 518 unknown_predictions 32 accuracy: 91.35802469135803
current_samples 568 correct_predictions 519 unknown_predictions 32 accuracy: 91.37323943661971
current_samples 569 correct_predictions 520 unknown_predictions 32 accuracy: 91.3884007029877
current_samples 570 correct_predictions 521 unknown_predictions 32 accuracy: 91.40350877192982
current_samples 571 correct_predictions 522 unknown_predictions 32 accuracy: 91.41856392294221
current_samples 572 correct_predictions 523 unknown_predictions 32 accuracy: 91.43356643356644
Invalid Prediction for dataset_evaluate\Person04\person04232-15-15.jpg | Prediction Name - person10
current_samples 573 correct_predictions 523 unknown_predictions 32 accuracy: 91.2739965095986
current_samples 574 correct_predictions 524 unknown_predictions 32 accuracy: 91.28919860627178
current_samples 575 correct_predictions 525 unknown_predictions 32 accuracy: 91.30434782608695
current_samples 576 correct_predictions 526 unknown_predictions 32 accuracy: 91.31944444444444
current_samples 577 correct_predictions 527 unknown_predictions 32 accuracy: 91.33448873483535
current_samples 578 correct_predictions 528 unknown_predictions 32 accuracy: 91.34948096885813
current_samples 579 correct_predictions 529 unknown_predictions 32 accuracy: 91.36442141623489
Invalid Prediction for dataset_evaluate\Person04\person04242+0-60.jpg | Prediction Name - person02
current_samples 580 correct_predictions 529 unknown_predictions 32 accuracy: 91.20689655172414
current_samples 581 correct_predictions 530 unknown_predictions 32 accuracy: 91.22203098106712
current_samples 582 correct_predictions 531 unknown_predictions 32 accuracy: 91.23711340206185
current_samples 583 correct_predictions 532 unknown_predictions 32 accuracy: 91.25214408233276
current_samples 584 correct_predictions 533 unknown_predictions 32 accuracy: 91.26712328767124
current_samples 585 correct_predictions 534 unknown_predictions 32 accuracy: 91.28205128205128
current_samples 586 correct_predictions 535 unknown_predictions 32 accuracy: 91.29692832764505
current_samples 587 correct_predictions 536 unknown_predictions 32 accuracy: 91.31175468483816
Invalid Prediction for dataset_evaluate\Person04\person04253+15-90.jpg | Prediction Name - person02
current_samples 588 correct_predictions 536 unknown_predictions 32 accuracy: 91.15646258503402
current_samples 589 correct_predictions 537 unknown_predictions 32 accuracy: 91.17147707979628
current_samples 590 correct_predictions 538 unknown_predictions 32 accuracy: 91.18644067796609
current_samples 591 correct_predictions 539 unknown_predictions 32 accuracy: 91.20135363790186
current_samples 592 correct_predictions 540 unknown_predictions 32 accuracy: 91.21621621621621
current_samples 593 correct_predictions 541 unknown_predictions 32 accuracy: 91.2310286677909
current_samples 594 correct_predictions 542 unknown_predictions 32 accuracy: 91.24579124579124
current_samples 595 correct_predictions 543 unknown_predictions 32 accuracy: 91.26050420168067
current_samples 596 correct_predictions 544 unknown_predictions 32 accuracy: 91.2751677852349
current_samples 597 correct_predictions 545 unknown_predictions 32 accuracy: 91.28978224455612
current_samples 598 correct_predictions 546 unknown_predictions 32 accuracy: 91.30434782608695
current_samples 599 correct_predictions 547 unknown_predictions 32 accuracy: 91.31886477462437
Invalid Prediction for dataset_evaluate\Person04\person04265+15+90.jpg | Prediction Name - person02
current_samples 600 correct_predictions 547 unknown_predictions 32 accuracy: 91.16666666666666
current_samples 601 correct_predictions 548 unknown_predictions 32 accuracy: 91.18136439267886
current_samples 602 correct_predictions 549 unknown_predictions 32 accuracy: 91.19601328903654
current_samples 603 correct_predictions 550 unknown_predictions 32 accuracy: 91.21061359867329
current_samples 604 correct_predictions 551 unknown_predictions 32 accuracy: 91.22516556291392
current_samples 605 correct_predictions 552 unknown_predictions 32 accuracy: 91.2396694214876
current_samples 606 correct_predictions 553 unknown_predictions 32 accuracy: 91.25412541254126
current_samples 607 correct_predictions 554 unknown_predictions 32 accuracy: 91.26853377265239
current_samples 608 correct_predictions 555 unknown_predictions 32 accuracy: 91.2828947368421
Invalid Prediction for dataset_evaluate\Person04\person04274+30+30.jpg | Prediction Name - person02
current_samples 609 correct_predictions 555 unknown_predictions 32 accuracy: 91.13300492610837
current_samples 610 correct_predictions 556 unknown_predictions 32 accuracy: 91.14754098360656
Invalid Prediction for dataset_evaluate\Person04\person04276+30+60.jpg | Prediction Name - person02
current_samples 611 correct_predictions 556 unknown_predictions 32 accuracy: 90.99836333878886
current_samples 612 correct_predictions 557 unknown_predictions 32 accuracy: 91.01307189542483
current_samples 613 correct_predictions 558 unknown_predictions 32 accuracy: 91.02773246329528
current_samples 614 correct_predictions 559 unknown_predictions 32 accuracy: 91.04234527687296
current_samples 615 correct_predictions 560 unknown_predictions 32 accuracy: 91.05691056910568
current_samples 616 correct_predictions 561 unknown_predictions 32 accuracy: 91.07142857142857
current_samples 617 correct_predictions 562 unknown_predictions 32 accuracy: 91.08589951377634
Invalid Prediction for dataset_evaluate\Person04\person04283+60-30.jpg | Prediction Name - person02
current_samples 618 correct_predictions 562 unknown_predictions 32 accuracy: 90.93851132686083
current_samples 619 correct_predictions 563 unknown_predictions 32 accuracy: 90.95315024232633
current_samples 620 correct_predictions 564 unknown_predictions 32 accuracy: 90.96774193548387
current_samples 621 correct_predictions 565 unknown_predictions 32 accuracy: 90.98228663446055
Invalid Prediction for dataset_evaluate\Person04\person04287+60+30.jpg | Prediction Name - person01
current_samples 622 correct_predictions 565 unknown_predictions 32 accuracy: 90.83601286173634
current_samples 623 correct_predictions 566 unknown_predictions 32 accuracy: 90.85072231139647
current_samples 624 correct_predictions 567 unknown_predictions 32 accuracy: 90.86538461538461
current_samples 625 correct_predictions 568 unknown_predictions 32 accuracy: 90.88000000000001
current_samples 626 correct_predictions 569 unknown_predictions 32 accuracy: 90.89456869009584
current_samples 627 correct_predictions 570 unknown_predictions 32 accuracy: 90.9090909090909
Invalid Prediction for dataset_evaluate\Person05\person05101-60-90.jpg | Prediction Name - person01
current_samples 628 correct_predictions 570 unknown_predictions 32 accuracy: 90.76433121019109
Invalid Prediction for dataset_evaluate\Person05\person05102-60-75.jpg | Prediction Name - person01
current_samples 629 correct_predictions 570 unknown_predictions 32 accuracy: 90.62003179650239
current_samples 630 correct_predictions 571 unknown_predictions 32 accuracy: 90.63492063492063
Invalid Prediction for dataset_evaluate\Person05\person05104-60-45.jpg | Prediction Name - person07
current_samples 631 correct_predictions 571 unknown_predictions 32 accuracy: 90.49128367670365
Invalid Prediction for dataset_evaluate\Person05\person05105-60-30.jpg | Prediction Name - person15
current_samples 632 correct_predictions 571 unknown_predictions 32 accuracy: 90.34810126582279
current_samples 633 correct_predictions 572 unknown_predictions 32 accuracy: 90.36334913112164
Invalid Prediction for dataset_evaluate\Person05\person05107-60+0.jpg | Prediction Name - person15
current_samples 634 correct_predictions 572 unknown_predictions 32 accuracy: 90.22082018927445
current_samples 635 correct_predictions 573 unknown_predictions 32 accuracy: 90.23622047244095
Invalid Prediction for dataset_evaluate\Person05\person05110-60+45.jpg | Prediction Name - person04
current_samples 636 correct_predictions 573 unknown_predictions 32 accuracy: 90.09433962264151
current_samples 637 correct_predictions 574 unknown_predictions 32 accuracy: 90.10989010989012
current_samples 638 correct_predictions 575 unknown_predictions 32 accuracy: 90.12539184952978
Invalid Prediction for dataset_evaluate\Person05\person05114-30-90.jpg | Prediction Name - person04
current_samples 639 correct_predictions 575 unknown_predictions 32 accuracy: 89.98435054773083
current_samples 640 correct_predictions 576 unknown_predictions 32 accuracy: 90.0
current_samples 641 correct_predictions 577 unknown_predictions 32 accuracy: 90.01560062402496
current_samples 642 correct_predictions 578 unknown_predictions 32 accuracy: 90.03115264797508
Invalid Prediction for dataset_evaluate\Person05\person05118-30-30.jpg | Prediction Name - person14
current_samples 643 correct_predictions 578 unknown_predictions 32 accuracy: 89.89113530326594
Invalid Prediction for dataset_evaluate\Person05\person05119-30-15.jpg | Prediction Name - person09
current_samples 644 correct_predictions 578 unknown_predictions 32 accuracy: 89.75155279503106
Invalid Prediction for dataset_evaluate\Person05\person05120-30+0.jpg | Prediction Name - person09
current_samples 645 correct_predictions 578 unknown_predictions 32 accuracy: 89.6124031007752
current_samples 646 correct_predictions 579 unknown_predictions 32 accuracy: 89.62848297213623
Invalid Prediction for dataset_evaluate\Person05\person05122-30+30.jpg | Prediction Name - person01
current_samples 647 correct_predictions 579 unknown_predictions 32 accuracy: 89.48995363214837
current_samples 648 correct_predictions 580 unknown_predictions 32 accuracy: 89.50617283950618
Invalid Prediction for dataset_evaluate\Person05\person05124-30+60.jpg | Prediction Name - person01
current_samples 649 correct_predictions 580 unknown_predictions 32 accuracy: 89.36825885978429
current_samples 650 correct_predictions 581 unknown_predictions 32 accuracy: 89.38461538461539
current_samples 651 correct_predictions 582 unknown_predictions 32 accuracy: 89.40092165898618
current_samples 652 correct_predictions 583 unknown_predictions 32 accuracy: 89.41717791411043
current_samples 653 correct_predictions 584 unknown_predictions 32 accuracy: 89.43338437978561
current_samples 654 correct_predictions 585 unknown_predictions 32 accuracy: 89.44954128440367
current_samples 655 correct_predictions 586 unknown_predictions 32 accuracy: 89.46564885496183
current_samples 656 correct_predictions 587 unknown_predictions 32 accuracy: 89.48170731707317
current_samples 657 correct_predictions 588 unknown_predictions 32 accuracy: 89.49771689497716
current_samples 658 correct_predictions 589 unknown_predictions 32 accuracy: 89.51367781155015
current_samples 659 correct_predictions 590 unknown_predictions 32 accuracy: 89.52959028831563
current_samples 660 correct_predictions 591 unknown_predictions 32 accuracy: 89.54545454545455
current_samples 661 correct_predictions 592 unknown_predictions 32 accuracy: 89.56127080181543
current_samples 662 correct_predictions 593 unknown_predictions 32 accuracy: 89.57703927492447
current_samples 663 correct_predictions 594 unknown_predictions 32 accuracy: 89.59276018099548
current_samples 664 correct_predictions 595 unknown_predictions 32 accuracy: 89.60843373493977
current_samples 665 correct_predictions 596 unknown_predictions 32 accuracy: 89.62406015037594
current_samples 666 correct_predictions 597 unknown_predictions 32 accuracy: 89.63963963963964
current_samples 667 correct_predictions 598 unknown_predictions 32 accuracy: 89.65517241379311
current_samples 668 correct_predictions 599 unknown_predictions 32 accuracy: 89.67065868263472
current_samples 669 correct_predictions 600 unknown_predictions 32 accuracy: 89.68609865470853
current_samples 670 correct_predictions 601 unknown_predictions 32 accuracy: 89.70149253731343
current_samples 671 correct_predictions 602 unknown_predictions 32 accuracy: 89.71684053651266
current_samples 672 correct_predictions 603 unknown_predictions 32 accuracy: 89.73214285714286
current_samples 673 correct_predictions 604 unknown_predictions 32 accuracy: 89.74739970282319
current_samples 674 correct_predictions 605 unknown_predictions 32 accuracy: 89.76261127596439
current_samples 675 correct_predictions 606 unknown_predictions 32 accuracy: 89.77777777777777
current_samples 676 correct_predictions 607 unknown_predictions 32 accuracy: 89.79289940828401
current_samples 677 correct_predictions 608 unknown_predictions 32 accuracy: 89.80797636632201
Invalid Prediction for dataset_evaluate\Person05\person05153+15-90.jpg | Prediction Name - person04
current_samples 678 correct_predictions 608 unknown_predictions 32 accuracy: 89.67551622418878
current_samples 679 correct_predictions 609 unknown_predictions 32 accuracy: 89.69072164948454
current_samples 680 correct_predictions 610 unknown_predictions 32 accuracy: 89.70588235294117
current_samples 681 correct_predictions 611 unknown_predictions 32 accuracy: 89.72099853157121
current_samples 682 correct_predictions 612 unknown_predictions 32 accuracy: 89.73607038123167
Invalid Prediction for dataset_evaluate\Person05\person05158+15-15.jpg | Prediction Name - person13
current_samples 683 correct_predictions 612 unknown_predictions 32 accuracy: 89.60468521229869
current_samples 684 correct_predictions 613 unknown_predictions 32 accuracy: 89.61988304093568
current_samples 685 correct_predictions 614 unknown_predictions 32 accuracy: 89.63503649635037
Invalid Prediction for dataset_evaluate\Person05\person05161+15+30.jpg | Prediction Name - person01
current_samples 686 correct_predictions 614 unknown_predictions 32 accuracy: 89.50437317784257
current_samples 687 correct_predictions 615 unknown_predictions 32 accuracy: 89.51965065502183
Invalid Prediction for dataset_evaluate\Person05\person05163+15+60.jpg | Prediction Name - person01
current_samples 688 correct_predictions 615 unknown_predictions 32 accuracy: 89.38953488372093
current_samples 689 correct_predictions 616 unknown_predictions 32 accuracy: 89.40493468795356
Invalid Prediction for dataset_evaluate\Person05\person05165+15+90.jpg | Prediction Name - person01
current_samples 690 correct_predictions 616 unknown_predictions 32 accuracy: 89.27536231884058
current_samples 691 correct_predictions 617 unknown_predictions 32 accuracy: 89.29088277858177
current_samples 692 correct_predictions 618 unknown_predictions 32 accuracy: 89.30635838150289
Invalid Prediction for dataset_evaluate\Person05\person05168+30-60.jpg | Prediction Name - person01
current_samples 693 correct_predictions 618 unknown_predictions 32 accuracy: 89.17748917748918
current_samples 694 correct_predictions 619 unknown_predictions 32 accuracy: 89.19308357348703
Invalid Prediction for dataset_evaluate\Person05\person05170+30-30.jpg | Prediction Name - person04
current_samples 695 correct_predictions 619 unknown_predictions 32 accuracy: 89.06474820143885
current_samples 696 correct_predictions 620 unknown_predictions 32 accuracy: 89.08045977011494
current_samples 697 correct_predictions 621 unknown_predictions 32 accuracy: 89.0961262553802
current_samples 698 correct_predictions 622 unknown_predictions 32 accuracy: 89.11174785100286
current_samples 699 correct_predictions 623 unknown_predictions 32 accuracy: 89.12732474964234
current_samples 700 correct_predictions 624 unknown_predictions 32 accuracy: 89.14285714285714
current_samples 701 correct_predictions 625 unknown_predictions 32 accuracy: 89.1583452211127
current_samples 702 correct_predictions 626 unknown_predictions 32 accuracy: 89.17378917378917
current_samples 703 correct_predictions 627 unknown_predictions 32 accuracy: 89.1891891891892
Invalid Prediction for dataset_evaluate\Person05\person05179+60-90.jpg | Prediction Name - person02
current_samples 704 correct_predictions 627 unknown_predictions 32 accuracy: 89.0625
current_samples 705 correct_predictions 628 unknown_predictions 32 accuracy: 89.07801418439716
current_samples 706 correct_predictions 629 unknown_predictions 32 accuracy: 89.09348441926346
current_samples 707 correct_predictions 630 unknown_predictions 32 accuracy: 89.10891089108911
current_samples 708 correct_predictions 631 unknown_predictions 32 accuracy: 89.12429378531074
Invalid Prediction for dataset_evaluate\Person05\person05184+60-15.jpg | Prediction Name - person04
current_samples 709 correct_predictions 631 unknown_predictions 32 accuracy: 88.99858956276445
current_samples 710 correct_predictions 632 unknown_predictions 32 accuracy: 89.01408450704226
Invalid Prediction for dataset_evaluate\Person05\person05186+60+15.jpg | Prediction Name - person04
current_samples 711 correct_predictions 632 unknown_predictions 32 accuracy: 88.88888888888889
current_samples 712 correct_predictions 633 unknown_predictions 32 accuracy: 88.90449438202246
current_samples 713 correct_predictions 634 unknown_predictions 32 accuracy: 88.92005610098177
current_samples 714 correct_predictions 635 unknown_predictions 32 accuracy: 88.93557422969187
current_samples 715 correct_predictions 636 unknown_predictions 32 accuracy: 88.95104895104895
current_samples 716 correct_predictions 637 unknown_predictions 32 accuracy: 88.96648044692738
current_samples 717 correct_predictions 638 unknown_predictions 32 accuracy: 88.98186889818689
current_samples 718 correct_predictions 639 unknown_predictions 32 accuracy: 88.99721448467966
current_samples 719 correct_predictions 640 unknown_predictions 32 accuracy: 89.01251738525731
current_samples 720 correct_predictions 641 unknown_predictions 32 accuracy: 89.02777777777777
current_samples 721 correct_predictions 642 unknown_predictions 32 accuracy: 89.04299583911235
Invalid Prediction for dataset_evaluate\Person05\person05206-60-15.jpg | Prediction Name - person15
current_samples 722 correct_predictions 642 unknown_predictions 32 accuracy: 88.9196675900277
current_samples 723 correct_predictions 643 unknown_predictions 32 accuracy: 88.93499308437067
current_samples 724 correct_predictions 644 unknown_predictions 32 accuracy: 88.95027624309392
current_samples 725 correct_predictions 645 unknown_predictions 32 accuracy: 88.96551724137932
current_samples 726 correct_predictions 646 unknown_predictions 32 accuracy: 88.98071625344353
current_samples 727 correct_predictions 647 unknown_predictions 32 accuracy: 88.9958734525447
current_samples 728 correct_predictions 648 unknown_predictions 32 accuracy: 89.01098901098901
Invalid Prediction for dataset_evaluate\Person05\person05213-60+90.jpg | Prediction Name - person04
current_samples 729 correct_predictions 648 unknown_predictions 32 accuracy: 88.88888888888889
current_samples 730 correct_predictions 649 unknown_predictions 32 accuracy: 88.9041095890411
current_samples 731 correct_predictions 650 unknown_predictions 32 accuracy: 88.91928864569083
current_samples 732 correct_predictions 651 unknown_predictions 32 accuracy: 88.9344262295082
current_samples 733 correct_predictions 652 unknown_predictions 32 accuracy: 88.94952251023193
Invalid Prediction for dataset_evaluate\Person05\person05218-30-30.jpg | Prediction Name - person07
current_samples 734 correct_predictions 652 unknown_predictions 32 accuracy: 88.8283378746594
current_samples 735 correct_predictions 653 unknown_predictions 32 accuracy: 88.843537414966
current_samples 736 correct_predictions 654 unknown_predictions 32 accuracy: 88.8586956521739
current_samples 737 correct_predictions 655 unknown_predictions 32 accuracy: 88.87381275440977
current_samples 738 correct_predictions 656 unknown_predictions 32 accuracy: 88.88888888888889
current_samples 739 correct_predictions 657 unknown_predictions 32 accuracy: 88.90392422192151
current_samples 740 correct_predictions 658 unknown_predictions 32 accuracy: 88.91891891891892
current_samples 741 correct_predictions 659 unknown_predictions 32 accuracy: 88.93387314439946
current_samples 742 correct_predictions 660 unknown_predictions 32 accuracy: 88.94878706199461
current_samples 743 correct_predictions 661 unknown_predictions 32 accuracy: 88.96366083445491
current_samples 744 correct_predictions 662 unknown_predictions 32 accuracy: 88.97849462365592
current_samples 745 correct_predictions 663 unknown_predictions 32 accuracy: 88.99328859060402
current_samples 746 correct_predictions 664 unknown_predictions 32 accuracy: 89.00804289544236
current_samples 747 correct_predictions 665 unknown_predictions 32 accuracy: 89.02275769745648
current_samples 748 correct_predictions 666 unknown_predictions 32 accuracy: 89.03743315508021
current_samples 749 correct_predictions 667 unknown_predictions 32 accuracy: 89.05206942590121
current_samples 750 correct_predictions 668 unknown_predictions 32 accuracy: 89.06666666666668
current_samples 751 correct_predictions 669 unknown_predictions 32 accuracy: 89.08122503328894
current_samples 752 correct_predictions 670 unknown_predictions 32 accuracy: 89.09574468085107
current_samples 753 correct_predictions 671 unknown_predictions 32 accuracy: 89.11022576361222
current_samples 754 correct_predictions 672 unknown_predictions 32 accuracy: 89.12466843501326
current_samples 755 correct_predictions 673 unknown_predictions 32 accuracy: 89.13907284768212
current_samples 756 correct_predictions 674 unknown_predictions 32 accuracy: 89.15343915343915
current_samples 757 correct_predictions 675 unknown_predictions 32 accuracy: 89.16776750330251
current_samples 758 correct_predictions 676 unknown_predictions 32 accuracy: 89.18205804749341
current_samples 759 correct_predictions 677 unknown_predictions 32 accuracy: 89.19631093544137
current_samples 760 correct_predictions 678 unknown_predictions 32 accuracy: 89.21052631578948
current_samples 761 correct_predictions 679 unknown_predictions 32 accuracy: 89.22470433639947
current_samples 762 correct_predictions 680 unknown_predictions 32 accuracy: 89.23884514435696
current_samples 763 correct_predictions 681 unknown_predictions 32 accuracy: 89.25294888597641
current_samples 764 correct_predictions 682 unknown_predictions 32 accuracy: 89.26701570680629
current_samples 765 correct_predictions 683 unknown_predictions 32 accuracy: 89.281045751634
current_samples 766 correct_predictions 684 unknown_predictions 32 accuracy: 89.29503916449086
current_samples 767 correct_predictions 685 unknown_predictions 32 accuracy: 89.30899608865711
current_samples 768 correct_predictions 686 unknown_predictions 32 accuracy: 89.32291666666666
current_samples 769 correct_predictions 687 unknown_predictions 32 accuracy: 89.3368010403121
current_samples 770 correct_predictions 688 unknown_predictions 32 accuracy: 89.35064935064935
current_samples 771 correct_predictions 689 unknown_predictions 32 accuracy: 89.3644617380026
current_samples 772 correct_predictions 690 unknown_predictions 32 accuracy: 89.37823834196891
current_samples 773 correct_predictions 691 unknown_predictions 32 accuracy: 89.39197930142304
current_samples 774 correct_predictions 692 unknown_predictions 32 accuracy: 89.40568475452196
current_samples 775 correct_predictions 693 unknown_predictions 32 accuracy: 89.41935483870968
Invalid Prediction for dataset_evaluate\Person05\person05260+15+15.jpg | Prediction Name - person12
current_samples 776 correct_predictions 693 unknown_predictions 32 accuracy: 89.30412371134021
current_samples 777 correct_predictions 694 unknown_predictions 32 accuracy: 89.31788931788932
current_samples 778 correct_predictions 695 unknown_predictions 32 accuracy: 89.33161953727506
current_samples 779 correct_predictions 696 unknown_predictions 32 accuracy: 89.34531450577664
current_samples 780 correct_predictions 697 unknown_predictions 32 accuracy: 89.35897435897436
current_samples 781 correct_predictions 698 unknown_predictions 32 accuracy: 89.37259923175415
current_samples 782 correct_predictions 699 unknown_predictions 32 accuracy: 89.38618925831202
current_samples 783 correct_predictions 700 unknown_predictions 32 accuracy: 89.39974457215837
current_samples 784 correct_predictions 701 unknown_predictions 32 accuracy: 89.41326530612244
current_samples 785 correct_predictions 702 unknown_predictions 32 accuracy: 89.4267515923567
current_samples 786 correct_predictions 703 unknown_predictions 32 accuracy: 89.44020356234097
Invalid Prediction for dataset_evaluate\Person05\person05271+30-15.jpg | Prediction Name - person14
current_samples 787 correct_predictions 703 unknown_predictions 32 accuracy: 89.32655654383736
current_samples 788 correct_predictions 704 unknown_predictions 32 accuracy: 89.34010152284264
current_samples 789 correct_predictions 705 unknown_predictions 32 accuracy: 89.35361216730038
current_samples 790 correct_predictions 706 unknown_predictions 32 accuracy: 89.36708860759494
current_samples 791 correct_predictions 707 unknown_predictions 32 accuracy: 89.38053097345133
current_samples 792 correct_predictions 708 unknown_predictions 32 accuracy: 89.39393939393939
current_samples 793 correct_predictions 709 unknown_predictions 32 accuracy: 89.40731399747793
current_samples 794 correct_predictions 710 unknown_predictions 32 accuracy: 89.4206549118388
current_samples 795 correct_predictions 711 unknown_predictions 32 accuracy: 89.43396226415095
current_samples 796 correct_predictions 712 unknown_predictions 32 accuracy: 89.44723618090453
current_samples 797 correct_predictions 713 unknown_predictions 32 accuracy: 89.46047678795483
current_samples 798 correct_predictions 714 unknown_predictions 32 accuracy: 89.47368421052632
current_samples 799 correct_predictions 715 unknown_predictions 32 accuracy: 89.48685857321652
current_samples 800 correct_predictions 716 unknown_predictions 32 accuracy: 89.5
current_samples 801 correct_predictions 717 unknown_predictions 32 accuracy: 89.51310861423221
current_samples 802 correct_predictions 718 unknown_predictions 32 accuracy: 89.52618453865337
current_samples 803 correct_predictions 719 unknown_predictions 32 accuracy: 89.53922789539229
current_samples 804 correct_predictions 720 unknown_predictions 32 accuracy: 89.55223880597015
current_samples 805 correct_predictions 721 unknown_predictions 32 accuracy: 89.56521739130436
Invalid Prediction for dataset_evaluate\Person05\person05290+60+75.jpg | Prediction Name - person01
current_samples 806 correct_predictions 721 unknown_predictions 32 accuracy: 89.45409429280396
current_samples 807 correct_predictions 722 unknown_predictions 32 accuracy: 89.46716232961586
current_samples 808 correct_predictions 723 unknown_predictions 32 accuracy: 89.48019801980197
Invalid Prediction for dataset_evaluate\Person06\person06100-90+0.jpg | Prediction Name - person11
current_samples 809 correct_predictions 723 unknown_predictions 32 accuracy: 89.36959208899876
Invalid Prediction for dataset_evaluate\Person06\person06101-60-90.jpg | Prediction Name - person04
current_samples 810 correct_predictions 723 unknown_predictions 32 accuracy: 89.25925925925927
current_samples 811 correct_predictions 724 unknown_predictions 32 accuracy: 89.27250308261405
Invalid Prediction for dataset_evaluate\Person06\person06103-60-60.jpg | Prediction Name - person04
current_samples 812 correct_predictions 724 unknown_predictions 32 accuracy: 89.16256157635468
Invalid Prediction for dataset_evaluate\Person06\person06104-60-45.jpg | Prediction Name - person05
current_samples 813 correct_predictions 724 unknown_predictions 32 accuracy: 89.0528905289053
current_samples 814 correct_predictions 725 unknown_predictions 32 accuracy: 89.06633906633907
current_samples 815 correct_predictions 726 unknown_predictions 32 accuracy: 89.079754601227
Invalid Prediction for dataset_evaluate\Person06\person06107-60+0.jpg | Prediction Name - person09
current_samples 816 correct_predictions 726 unknown_predictions 32 accuracy: 88.97058823529412
Invalid Prediction for dataset_evaluate\Person06\person06108-60+15.jpg | Prediction Name - person09
current_samples 817 correct_predictions 726 unknown_predictions 32 accuracy: 88.86168910648715
current_samples 818 correct_predictions 727 unknown_predictions 32 accuracy: 88.87530562347187
current_samples 819 correct_predictions 728 unknown_predictions 32 accuracy: 88.88888888888889
current_samples 820 correct_predictions 729 unknown_predictions 32 accuracy: 88.90243902439025
Invalid Prediction for dataset_evaluate\Person06\person06112-60+75.jpg | Prediction Name - person03
current_samples 821 correct_predictions 729 unknown_predictions 32 accuracy: 88.79415347137638
Invalid Prediction for dataset_evaluate\Person06\person06114-30-90.jpg | Prediction Name - person04
current_samples 822 correct_predictions 729 unknown_predictions 32 accuracy: 88.6861313868613
current_samples 823 correct_predictions 730 unknown_predictions 32 accuracy: 88.69987849331713
current_samples 824 correct_predictions 731 unknown_predictions 32 accuracy: 88.7135922330097
current_samples 825 correct_predictions 732 unknown_predictions 32 accuracy: 88.72727272727273
current_samples 826 correct_predictions 733 unknown_predictions 32 accuracy: 88.7409200968523
current_samples 827 correct_predictions 734 unknown_predictions 32 accuracy: 88.75453446191052
Invalid Prediction for dataset_evaluate\Person06\person06120-30+0.jpg | Prediction Name - person09
current_samples 828 correct_predictions 734 unknown_predictions 32 accuracy: 88.64734299516908
current_samples 829 correct_predictions 735 unknown_predictions 32 accuracy: 88.66103739445114
Invalid Prediction for dataset_evaluate\Person06\person06122-30+30.jpg | Prediction Name - person05
current_samples 830 correct_predictions 735 unknown_predictions 32 accuracy: 88.55421686746988
current_samples 831 correct_predictions 736 unknown_predictions 32 accuracy: 88.56799037304452
current_samples 832 correct_predictions 737 unknown_predictions 32 accuracy: 88.58173076923077
current_samples 833 correct_predictions 738 unknown_predictions 32 accuracy: 88.5954381752701
Invalid Prediction for dataset_evaluate\Person06\person06126-30+90.jpg | Prediction Name - person05
current_samples 834 correct_predictions 738 unknown_predictions 32 accuracy: 88.48920863309353
current_samples 835 correct_predictions 739 unknown_predictions 32 accuracy: 88.50299401197604
current_samples 836 correct_predictions 740 unknown_predictions 32 accuracy: 88.51674641148325
Invalid Prediction for dataset_evaluate\Person06\person06129-15-60.jpg | Prediction Name - person05
current_samples 837 correct_predictions 740 unknown_predictions 32 accuracy: 88.41099163679809
current_samples 838 correct_predictions 741 unknown_predictions 32 accuracy: 88.42482100238664
Invalid Prediction for dataset_evaluate\Person06\person06131-15-30.jpg | Prediction Name - person10
current_samples 839 correct_predictions 741 unknown_predictions 32 accuracy: 88.31942789034565
current_samples 840 correct_predictions 742 unknown_predictions 32 accuracy: 88.33333333333333
current_samples 841 correct_predictions 743 unknown_predictions 32 accuracy: 88.34720570749109
current_samples 842 correct_predictions 744 unknown_predictions 32 accuracy: 88.36104513064133
current_samples 843 correct_predictions 745 unknown_predictions 32 accuracy: 88.37485172004746
current_samples 844 correct_predictions 746 unknown_predictions 32 accuracy: 88.38862559241706
current_samples 845 correct_predictions 747 unknown_predictions 32 accuracy: 88.40236686390533
current_samples 846 correct_predictions 748 unknown_predictions 32 accuracy: 88.4160756501182
current_samples 847 correct_predictions 749 unknown_predictions 32 accuracy: 88.42975206611571
current_samples 848 correct_predictions 750 unknown_predictions 32 accuracy: 88.44339622641509
current_samples 849 correct_predictions 751 unknown_predictions 32 accuracy: 88.4570082449941
current_samples 850 correct_predictions 752 unknown_predictions 32 accuracy: 88.47058823529412
current_samples 851 correct_predictions 753 unknown_predictions 32 accuracy: 88.48413631022328
current_samples 852 correct_predictions 754 unknown_predictions 32 accuracy: 88.49765258215963
current_samples 853 correct_predictions 755 unknown_predictions 32 accuracy: 88.51113716295428
current_samples 854 correct_predictions 756 unknown_predictions 32 accuracy: 88.52459016393442
Invalid Prediction for dataset_evaluate\Person06\person06147+0+15.jpg | Prediction Name - person05
current_samples 855 correct_predictions 756 unknown_predictions 32 accuracy: 88.42105263157895
current_samples 856 correct_predictions 757 unknown_predictions 32 accuracy: 88.43457943925233
current_samples 857 correct_predictions 758 unknown_predictions 32 accuracy: 88.44807467911319
current_samples 858 correct_predictions 759 unknown_predictions 32 accuracy: 88.46153846153845
current_samples 859 correct_predictions 760 unknown_predictions 32 accuracy: 88.47497089639114
Invalid Prediction for dataset_evaluate\Person06\person06152+0+90.jpg | Prediction Name - person04
current_samples 860 correct_predictions 760 unknown_predictions 32 accuracy: 88.37209302325581
Invalid Prediction for dataset_evaluate\Person06\person06153+15-90.jpg | Prediction Name - person04
current_samples 861 correct_predictions 760 unknown_predictions 32 accuracy: 88.26945412311265
current_samples 862 correct_predictions 761 unknown_predictions 32 accuracy: 88.2830626450116
current_samples 863 correct_predictions 762 unknown_predictions 32 accuracy: 88.29663962920047
Invalid Prediction for dataset_evaluate\Person06\person06156+15-45.jpg | Prediction Name - person04
current_samples 864 correct_predictions 762 unknown_predictions 32 accuracy: 88.19444444444444
current_samples 865 correct_predictions 763 unknown_predictions 32 accuracy: 88.20809248554913
current_samples 866 correct_predictions 764 unknown_predictions 32 accuracy: 88.2217090069284
current_samples 867 correct_predictions 765 unknown_predictions 32 accuracy: 88.23529411764706
current_samples 868 correct_predictions 766 unknown_predictions 32 accuracy: 88.24884792626729
Invalid Prediction for dataset_evaluate\Person06\person06161+15+30.jpg | Prediction Name - person05
current_samples 869 correct_predictions 766 unknown_predictions 32 accuracy: 88.14729574223246
current_samples 870 correct_predictions 767 unknown_predictions 32 accuracy: 88.16091954022988
current_samples 871 correct_predictions 768 unknown_predictions 32 accuracy: 88.17451205510906
current_samples 872 correct_predictions 769 unknown_predictions 32 accuracy: 88.18807339449542
current_samples 873 correct_predictions 770 unknown_predictions 32 accuracy: 88.20160366552119
current_samples 874 correct_predictions 771 unknown_predictions 32 accuracy: 88.21510297482837
current_samples 875 correct_predictions 772 unknown_predictions 32 accuracy: 88.22857142857143
current_samples 876 correct_predictions 773 unknown_predictions 32 accuracy: 88.2420091324201
Invalid Prediction for dataset_evaluate\Person06\person06170+30-30.jpg | Prediction Name - person05
current_samples 877 correct_predictions 773 unknown_predictions 32 accuracy: 88.14139110604333
current_samples 878 correct_predictions 774 unknown_predictions 32 accuracy: 88.15489749430525
current_samples 879 correct_predictions 775 unknown_predictions 32 accuracy: 88.16837315130832
current_samples 880 correct_predictions 776 unknown_predictions 32 accuracy: 88.18181818181819
current_samples 881 correct_predictions 777 unknown_predictions 32 accuracy: 88.19523269012485
current_samples 882 correct_predictions 778 unknown_predictions 32 accuracy: 88.20861678004536
Invalid Prediction for dataset_evaluate\Person06\person06176+30+60.jpg | Prediction Name - person05
current_samples 883 correct_predictions 778 unknown_predictions 32 accuracy: 88.10872027180068
current_samples 884 correct_predictions 779 unknown_predictions 32 accuracy: 88.12217194570135
current_samples 885 correct_predictions 780 unknown_predictions 32 accuracy: 88.13559322033898
Invalid Prediction for dataset_evaluate\Person06\person06179+60-90.jpg | Prediction Name - person05
current_samples 886 correct_predictions 780 unknown_predictions 32 accuracy: 88.03611738148985
current_samples 887 correct_predictions 781 unknown_predictions 32 accuracy: 88.04960541149943
current_samples 888 correct_predictions 782 unknown_predictions 32 accuracy: 88.06306306306307
current_samples 889 correct_predictions 783 unknown_predictions 32 accuracy: 88.07649043869516
current_samples 890 correct_predictions 784 unknown_predictions 32 accuracy: 88.08988764044943
Invalid Prediction for dataset_evaluate\Person06\person06184+60-15.jpg | Prediction Name - person04
current_samples 891 correct_predictions 784 unknown_predictions 32 accuracy: 87.99102132435466
current_samples 892 correct_predictions 785 unknown_predictions 32 accuracy: 88.00448430493275
current_samples 893 correct_predictions 786 unknown_predictions 32 accuracy: 88.01791713325868
Invalid Prediction for dataset_evaluate\Person06\person06187+60+30.jpg | Prediction Name - person05
current_samples 894 correct_predictions 786 unknown_predictions 32 accuracy: 87.91946308724832
current_samples 895 correct_predictions 787 unknown_predictions 32 accuracy: 87.93296089385476
current_samples 896 correct_predictions 788 unknown_predictions 32 accuracy: 87.94642857142857
Invalid Prediction for dataset_evaluate\Person06\person06190+60+75.jpg | Prediction Name - person05
current_samples 897 correct_predictions 788 unknown_predictions 32 accuracy: 87.84838350055742
current_samples 898 correct_predictions 789 unknown_predictions 32 accuracy: 87.8619153674833
current_samples 899 correct_predictions 790 unknown_predictions 32 accuracy: 87.87541713014461
current_samples 900 correct_predictions 791 unknown_predictions 32 accuracy: 87.8888888888889
current_samples 901 correct_predictions 792 unknown_predictions 32 accuracy: 87.90233074361821
current_samples 902 correct_predictions 793 unknown_predictions 32 accuracy: 87.91574279379158
current_samples 903 correct_predictions 794 unknown_predictions 32 accuracy: 87.92912513842747
current_samples 904 correct_predictions 795 unknown_predictions 32 accuracy: 87.9424778761062
current_samples 905 correct_predictions 796 unknown_predictions 32 accuracy: 87.95580110497238
current_samples 906 correct_predictions 797 unknown_predictions 32 accuracy: 87.96909492273731
current_samples 907 correct_predictions 798 unknown_predictions 32 accuracy: 87.98235942668137
current_samples 908 correct_predictions 799 unknown_predictions 32 accuracy: 87.99559471365639
current_samples 909 correct_predictions 800 unknown_predictions 32 accuracy: 88.00880088008802
current_samples 910 correct_predictions 801 unknown_predictions 32 accuracy: 88.02197802197801
current_samples 911 correct_predictions 802 unknown_predictions 32 accuracy: 88.03512623490668
current_samples 912 correct_predictions 803 unknown_predictions 32 accuracy: 88.0482456140351
current_samples 913 correct_predictions 804 unknown_predictions 32 accuracy: 88.06133625410733
current_samples 914 correct_predictions 805 unknown_predictions 32 accuracy: 88.07439824945295
Invalid Prediction for dataset_evaluate\Person06\person06223-30+45.jpg | Prediction Name - person11
current_samples 915 correct_predictions 805 unknown_predictions 32 accuracy: 87.97814207650273
current_samples 916 correct_predictions 806 unknown_predictions 32 accuracy: 87.99126637554585
Invalid Prediction for dataset_evaluate\Person06\person06225-30+75.jpg | Prediction Name - person05
current_samples 917 correct_predictions 806 unknown_predictions 32 accuracy: 87.89531079607416
current_samples 918 correct_predictions 807 unknown_predictions 32 accuracy: 87.90849673202614
current_samples 919 correct_predictions 808 unknown_predictions 32 accuracy: 87.92165397170838
current_samples 920 correct_predictions 809 unknown_predictions 32 accuracy: 87.93478260869566
current_samples 921 correct_predictions 810 unknown_predictions 32 accuracy: 87.94788273615634
current_samples 922 correct_predictions 811 unknown_predictions 32 accuracy: 87.96095444685467
current_samples 923 correct_predictions 812 unknown_predictions 32 accuracy: 87.97399783315277
current_samples 924 correct_predictions 813 unknown_predictions 32 accuracy: 87.98701298701299
current_samples 925 correct_predictions 814 unknown_predictions 32 accuracy: 88.0
current_samples 926 correct_predictions 815 unknown_predictions 32 accuracy: 88.01295896328294
current_samples 927 correct_predictions 816 unknown_predictions 32 accuracy: 88.02588996763754
current_samples 928 correct_predictions 817 unknown_predictions 32 accuracy: 88.03879310344827
current_samples 929 correct_predictions 818 unknown_predictions 32 accuracy: 88.05166846071045
current_samples 930 correct_predictions 819 unknown_predictions 32 accuracy: 88.06451612903226
current_samples 931 correct_predictions 820 unknown_predictions 32 accuracy: 88.07733619763695
current_samples 932 correct_predictions 821 unknown_predictions 32 accuracy: 88.0901287553648
current_samples 933 correct_predictions 822 unknown_predictions 32 accuracy: 88.10289389067523
current_samples 934 correct_predictions 823 unknown_predictions 32 accuracy: 88.11563169164882
current_samples 935 correct_predictions 824 unknown_predictions 32 accuracy: 88.1283422459893
current_samples 936 correct_predictions 825 unknown_predictions 32 accuracy: 88.14102564102564
current_samples 937 correct_predictions 826 unknown_predictions 32 accuracy: 88.15368196371398
current_samples 938 correct_predictions 827 unknown_predictions 32 accuracy: 88.16631130063965
current_samples 939 correct_predictions 828 unknown_predictions 32 accuracy: 88.17891373801918
current_samples 940 correct_predictions 829 unknown_predictions 32 accuracy: 88.19148936170212
current_samples 941 correct_predictions 830 unknown_predictions 32 accuracy: 88.20403825717322
current_samples 942 correct_predictions 831 unknown_predictions 32 accuracy: 88.21656050955414
Invalid Prediction for dataset_evaluate\Person06\person06251+0+75.jpg | Prediction Name - person05
current_samples 943 correct_predictions 831 unknown_predictions 32 accuracy: 88.12301166489925
current_samples 944 correct_predictions 832 unknown_predictions 32 accuracy: 88.13559322033898
Invalid Prediction for dataset_evaluate\Person06\person06253+15-90.jpg | Prediction Name - person05
current_samples 945 correct_predictions 832 unknown_predictions 32 accuracy: 88.04232804232804
current_samples 946 correct_predictions 833 unknown_predictions 32 accuracy: 88.05496828752642
current_samples 947 correct_predictions 834 unknown_predictions 32 accuracy: 88.0675818373812
current_samples 948 correct_predictions 835 unknown_predictions 32 accuracy: 88.08016877637131
current_samples 949 correct_predictions 836 unknown_predictions 32 accuracy: 88.0927291886196
current_samples 950 correct_predictions 837 unknown_predictions 32 accuracy: 88.10526315789474
current_samples 951 correct_predictions 838 unknown_predictions 32 accuracy: 88.11777076761304
Invalid Prediction for dataset_evaluate\Person06\person06261+15+30.jpg | Prediction Name - person05
current_samples 952 correct_predictions 838 unknown_predictions 32 accuracy: 88.02521008403362
current_samples 953 correct_predictions 839 unknown_predictions 32 accuracy: 88.03777544596014
Invalid Prediction for dataset_evaluate\Person06\person06285+60+0.jpg | Prediction Name - person01
current_samples 954 correct_predictions 839 unknown_predictions 32 accuracy: 87.9454926624738
Invalid Prediction for dataset_evaluate\Person07\person07100-90+0.jpg | Prediction Name - person01
current_samples 955 correct_predictions 839 unknown_predictions 32 accuracy: 87.85340314136126
Invalid Prediction for dataset_evaluate\Person07\person07101-60-90.jpg | Prediction Name - person06
current_samples 956 correct_predictions 839 unknown_predictions 32 accuracy: 87.76150627615063
current_samples 957 correct_predictions 840 unknown_predictions 32 accuracy: 87.7742946708464
Invalid Prediction for dataset_evaluate\Person07\person07103-60-60.jpg | Prediction Name - person04
current_samples 958 correct_predictions 840 unknown_predictions 32 accuracy: 87.68267223382045
current_samples 959 correct_predictions 841 unknown_predictions 32 accuracy: 87.69551616266945
Invalid Prediction for dataset_evaluate\Person07\person07105-60-30.jpg | Prediction Name - person05
current_samples 960 correct_predictions 841 unknown_predictions 32 accuracy: 87.60416666666667
Invalid Prediction for dataset_evaluate\Person07\person07106-60-15.jpg | Prediction Name - person05
current_samples 961 correct_predictions 841 unknown_predictions 32 accuracy: 87.51300728407908
Invalid Prediction for dataset_evaluate\Person07\person07107-60+0.jpg | Prediction Name - person05
current_samples 962 correct_predictions 841 unknown_predictions 32 accuracy: 87.42203742203742
current_samples 963 correct_predictions 842 unknown_predictions 32 accuracy: 87.43509865005193
Invalid Prediction for dataset_evaluate\Person07\person07109-60+30.jpg | Prediction Name - person05
current_samples 964 correct_predictions 842 unknown_predictions 32 accuracy: 87.34439834024896
Invalid Prediction for dataset_evaluate\Person07\person07111-60+60.jpg | Prediction Name - person05
current_samples 965 correct_predictions 842 unknown_predictions 32 accuracy: 87.25388601036269
current_samples 966 correct_predictions 843 unknown_predictions 32 accuracy: 87.26708074534162
Invalid Prediction for dataset_evaluate\Person07\person07113-60+90.jpg | Prediction Name - person04
current_samples 967 correct_predictions 843 unknown_predictions 32 accuracy: 87.17683557394002
current_samples 968 correct_predictions 844 unknown_predictions 32 accuracy: 87.19008264462809
current_samples 969 correct_predictions 845 unknown_predictions 32 accuracy: 87.20330237358101
current_samples 970 correct_predictions 846 unknown_predictions 32 accuracy: 87.21649484536083
current_samples 971 correct_predictions 847 unknown_predictions 32 accuracy: 87.22966014418125
current_samples 972 correct_predictions 848 unknown_predictions 32 accuracy: 87.24279835390946
current_samples 973 correct_predictions 849 unknown_predictions 32 accuracy: 87.25590955806783
current_samples 974 correct_predictions 850 unknown_predictions 32 accuracy: 87.26899383983573
Invalid Prediction for dataset_evaluate\Person07\person07121-30+15.jpg | Prediction Name - person05
current_samples 975 correct_predictions 850 unknown_predictions 32 accuracy: 87.17948717948718
current_samples 976 correct_predictions 851 unknown_predictions 32 accuracy: 87.19262295081968
current_samples 977 correct_predictions 852 unknown_predictions 32 accuracy: 87.2057318321392
Invalid Prediction for dataset_evaluate\Person07\person07124-30+60.jpg | Prediction Name - person04
current_samples 978 correct_predictions 852 unknown_predictions 32 accuracy: 87.11656441717791
Invalid Prediction for dataset_evaluate\Person07\person07125-30+75.jpg | Prediction Name - person04
current_samples 979 correct_predictions 852 unknown_predictions 32 accuracy: 87.02757916241062
current_samples 980 correct_predictions 853 unknown_predictions 32 accuracy: 87.04081632653062
Invalid Prediction for dataset_evaluate\Person07\person07127-15-90.jpg | Prediction Name - person04
current_samples 981 correct_predictions 853 unknown_predictions 32 accuracy: 86.95208970438328
current_samples 982 correct_predictions 854 unknown_predictions 32 accuracy: 86.9653767820774
Invalid Prediction for dataset_evaluate\Person07\person07129-15-60.jpg | Prediction Name - person06
current_samples 983 correct_predictions 854 unknown_predictions 32 accuracy: 86.87690742624619
current_samples 984 correct_predictions 855 unknown_predictions 32 accuracy: 86.89024390243902
current_samples 985 correct_predictions 856 unknown_predictions 32 accuracy: 86.90355329949239
current_samples 986 correct_predictions 857 unknown_predictions 32 accuracy: 86.91683569979716
current_samples 987 correct_predictions 858 unknown_predictions 32 accuracy: 86.93009118541033
current_samples 988 correct_predictions 859 unknown_predictions 32 accuracy: 86.94331983805668
current_samples 989 correct_predictions 860 unknown_predictions 32 accuracy: 86.95652173913044
Invalid Prediction for dataset_evaluate\Person07\person07136-15+45.jpg | Prediction Name - person05
current_samples 990 correct_predictions 860 unknown_predictions 32 accuracy: 86.86868686868688
current_samples 991 correct_predictions 861 unknown_predictions 32 accuracy: 86.88193743693239
current_samples 992 correct_predictions 862 unknown_predictions 32 accuracy: 86.89516129032258
Invalid Prediction for dataset_evaluate\Person07\person07139-15+90.jpg | Prediction Name - person05
current_samples 993 correct_predictions 862 unknown_predictions 32 accuracy: 86.80765357502518
current_samples 994 correct_predictions 863 unknown_predictions 32 accuracy: 86.82092555331991
current_samples 995 correct_predictions 864 unknown_predictions 32 accuracy: 86.83417085427135
current_samples 996 correct_predictions 865 unknown_predictions 32 accuracy: 86.84738955823293
current_samples 997 correct_predictions 866 unknown_predictions 32 accuracy: 86.8605817452357
Invalid Prediction for dataset_evaluate\Person07\person07144+0-30.jpg | Prediction Name - person05
current_samples 998 correct_predictions 866 unknown_predictions 32 accuracy: 86.77354709418837
current_samples 999 correct_predictions 867 unknown_predictions 32 accuracy: 86.78678678678679
current_samples 1000 correct_predictions 868 unknown_predictions 32 accuracy: 86.8
current_samples 1001 correct_predictions 869 unknown_predictions 32 accuracy: 86.81318681318682
Invalid Prediction for dataset_evaluate\Person07\person07148+0+30.jpg | Prediction Name - person05
current_samples 1002 correct_predictions 869 unknown_predictions 32 accuracy: 86.72654690618764
current_samples 1003 correct_predictions 870 unknown_predictions 32 accuracy: 86.73978065802592
current_samples 1004 correct_predictions 871 unknown_predictions 32 accuracy: 86.75298804780877
current_samples 1005 correct_predictions 872 unknown_predictions 32 accuracy: 86.76616915422886
Invalid Prediction for dataset_evaluate\Person07\person07152+0+90.jpg | Prediction Name - person06
current_samples 1006 correct_predictions 872 unknown_predictions 32 accuracy: 86.67992047713717
Invalid Prediction for dataset_evaluate\Person07\person07153+15-90.jpg | Prediction Name - person05
current_samples 1007 correct_predictions 872 unknown_predictions 32 accuracy: 86.59384309831182
current_samples 1008 correct_predictions 873 unknown_predictions 32 accuracy: 86.60714285714286
current_samples 1009 correct_predictions 874 unknown_predictions 32 accuracy: 86.62041625371654
current_samples 1010 correct_predictions 875 unknown_predictions 32 accuracy: 86.63366336633663
current_samples 1011 correct_predictions 876 unknown_predictions 32 accuracy: 86.64688427299704
current_samples 1012 correct_predictions 877 unknown_predictions 32 accuracy: 86.6600790513834
Invalid Prediction for dataset_evaluate\Person07\person07159+15+0.jpg | Prediction Name - person05
current_samples 1013 correct_predictions 877 unknown_predictions 32 accuracy: 86.57453109575518
Invalid Prediction for dataset_evaluate\Person07\person07160+15+15.jpg | Prediction Name - person05
current_samples 1014 correct_predictions 877 unknown_predictions 32 accuracy: 86.48915187376726
current_samples 1015 correct_predictions 878 unknown_predictions 32 accuracy: 86.50246305418719
current_samples 1016 correct_predictions 879 unknown_predictions 32 accuracy: 86.51574803149606
Invalid Prediction for dataset_evaluate\Person07\person07163+15+60.jpg | Prediction Name - person05
current_samples 1017 correct_predictions 879 unknown_predictions 32 accuracy: 86.4306784660767
current_samples 1018 correct_predictions 880 unknown_predictions 32 accuracy: 86.44400785854617
current_samples 1019 correct_predictions 881 unknown_predictions 32 accuracy: 86.45731108930323
current_samples 1020 correct_predictions 882 unknown_predictions 32 accuracy: 86.47058823529412
current_samples 1021 correct_predictions 883 unknown_predictions 32 accuracy: 86.48383937316356
Invalid Prediction for dataset_evaluate\Person07\person07168+30-60.jpg | Prediction Name - person05
current_samples 1022 correct_predictions 883 unknown_predictions 32 accuracy: 86.39921722113503
current_samples 1023 correct_predictions 884 unknown_predictions 32 accuracy: 86.41251221896383
current_samples 1024 correct_predictions 885 unknown_predictions 32 accuracy: 86.42578125
current_samples 1025 correct_predictions 886 unknown_predictions 32 accuracy: 86.4390243902439
current_samples 1026 correct_predictions 887 unknown_predictions 32 accuracy: 86.45224171539961
current_samples 1027 correct_predictions 888 unknown_predictions 32 accuracy: 86.46543330087634
current_samples 1028 correct_predictions 889 unknown_predictions 32 accuracy: 86.47859922178989
current_samples 1029 correct_predictions 890 unknown_predictions 32 accuracy: 86.49173955296405
current_samples 1030 correct_predictions 891 unknown_predictions 32 accuracy: 86.50485436893204
current_samples 1031 correct_predictions 892 unknown_predictions 32 accuracy: 86.51794374393792
Invalid Prediction for dataset_evaluate\Person07\person07178+30+90.jpg | Prediction Name - person05
current_samples 1032 correct_predictions 892 unknown_predictions 32 accuracy: 86.43410852713178
Invalid Prediction for dataset_evaluate\Person07\person07179+60-90.jpg | Prediction Name - person05
current_samples 1033 correct_predictions 892 unknown_predictions 32 accuracy: 86.35043562439496
current_samples 1034 correct_predictions 893 unknown_predictions 32 accuracy: 86.36363636363636
current_samples 1035 correct_predictions 894 unknown_predictions 32 accuracy: 86.37681159420289
current_samples 1036 correct_predictions 895 unknown_predictions 32 accuracy: 86.38996138996139
Invalid Prediction for dataset_evaluate\Person07\person07183+60-30.jpg | Prediction Name - person05
current_samples 1037 correct_predictions 895 unknown_predictions 32 accuracy: 86.3066538090646
current_samples 1038 correct_predictions 896 unknown_predictions 32 accuracy: 86.31984585741812
current_samples 1039 correct_predictions 897 unknown_predictions 32 accuracy: 86.33301251203079
Invalid Prediction for dataset_evaluate\Person07\person07186+60+15.jpg | Prediction Name - person05
current_samples 1040 correct_predictions 897 unknown_predictions 32 accuracy: 86.25
Invalid Prediction for dataset_evaluate\Person07\person07187+60+30.jpg | Prediction Name - person06
current_samples 1041 correct_predictions 897 unknown_predictions 32 accuracy: 86.1671469740634
current_samples 1042 correct_predictions 898 unknown_predictions 32 accuracy: 86.18042226487525
current_samples 1043 correct_predictions 899 unknown_predictions 32 accuracy: 86.19367209971237
Invalid Prediction for dataset_evaluate\Person07\person07190+60+75.jpg | Prediction Name - person06
current_samples 1044 correct_predictions 899 unknown_predictions 32 accuracy: 86.11111111111111
current_samples 1045 correct_predictions 900 unknown_predictions 32 accuracy: 86.1244019138756
current_samples 1046 correct_predictions 901 unknown_predictions 32 accuracy: 86.1376673040153
current_samples 1047 correct_predictions 902 unknown_predictions 32 accuracy: 86.15090735434575
current_samples 1048 correct_predictions 903 unknown_predictions 32 accuracy: 86.16412213740458
current_samples 1049 correct_predictions 904 unknown_predictions 32 accuracy: 86.17731172545281
current_samples 1050 correct_predictions 905 unknown_predictions 32 accuracy: 86.19047619047619
current_samples 1051 correct_predictions 906 unknown_predictions 32 accuracy: 86.2036156041865
current_samples 1052 correct_predictions 907 unknown_predictions 32 accuracy: 86.21673003802282
current_samples 1053 correct_predictions 908 unknown_predictions 32 accuracy: 86.2298195631529
current_samples 1054 correct_predictions 909 unknown_predictions 32 accuracy: 86.24288425047439
current_samples 1055 correct_predictions 910 unknown_predictions 32 accuracy: 86.25592417061611
current_samples 1056 correct_predictions 911 unknown_predictions 32 accuracy: 86.26893939393939
current_samples 1057 correct_predictions 912 unknown_predictions 32 accuracy: 86.28192999053927
current_samples 1058 correct_predictions 913 unknown_predictions 32 accuracy: 86.29489603024575
current_samples 1059 correct_predictions 914 unknown_predictions 32 accuracy: 86.30783758262511
current_samples 1060 correct_predictions 915 unknown_predictions 32 accuracy: 86.32075471698113
current_samples 1061 correct_predictions 916 unknown_predictions 32 accuracy: 86.33364750235627
current_samples 1062 correct_predictions 917 unknown_predictions 32 accuracy: 86.34651600753295
current_samples 1063 correct_predictions 918 unknown_predictions 32 accuracy: 86.3593603010348
current_samples 1064 correct_predictions 919 unknown_predictions 32 accuracy: 86.37218045112782
current_samples 1065 correct_predictions 920 unknown_predictions 32 accuracy: 86.3849765258216
current_samples 1066 correct_predictions 921 unknown_predictions 32 accuracy: 86.39774859287056
current_samples 1067 correct_predictions 922 unknown_predictions 32 accuracy: 86.41049671977507
current_samples 1068 correct_predictions 923 unknown_predictions 32 accuracy: 86.42322097378276
current_samples 1069 correct_predictions 924 unknown_predictions 32 accuracy: 86.43592142188962
current_samples 1070 correct_predictions 925 unknown_predictions 32 accuracy: 86.44859813084112
current_samples 1071 correct_predictions 926 unknown_predictions 32 accuracy: 86.46125116713353
current_samples 1072 correct_predictions 927 unknown_predictions 32 accuracy: 86.47388059701493
current_samples 1073 correct_predictions 928 unknown_predictions 32 accuracy: 86.48648648648648
current_samples 1074 correct_predictions 929 unknown_predictions 32 accuracy: 86.49906890130353
current_samples 1075 correct_predictions 930 unknown_predictions 32 accuracy: 86.51162790697674
current_samples 1076 correct_predictions 931 unknown_predictions 32 accuracy: 86.52416356877323
current_samples 1077 correct_predictions 932 unknown_predictions 32 accuracy: 86.53667595171774
current_samples 1078 correct_predictions 933 unknown_predictions 32 accuracy: 86.5491651205937
current_samples 1079 correct_predictions 934 unknown_predictions 32 accuracy: 86.5616311399444
current_samples 1080 correct_predictions 935 unknown_predictions 32 accuracy: 86.57407407407408
current_samples 1081 correct_predictions 936 unknown_predictions 32 accuracy: 86.58649398704902
current_samples 1082 correct_predictions 937 unknown_predictions 32 accuracy: 86.5988909426987
current_samples 1083 correct_predictions 938 unknown_predictions 32 accuracy: 86.6112650046168
current_samples 1084 correct_predictions 939 unknown_predictions 32 accuracy: 86.62361623616236
current_samples 1085 correct_predictions 940 unknown_predictions 32 accuracy: 86.63594470046083
current_samples 1086 correct_predictions 941 unknown_predictions 32 accuracy: 86.64825046040515
current_samples 1087 correct_predictions 942 unknown_predictions 32 accuracy: 86.66053357865685
current_samples 1088 correct_predictions 943 unknown_predictions 32 accuracy: 86.67279411764706
current_samples 1089 correct_predictions 944 unknown_predictions 32 accuracy: 86.68503213957759
current_samples 1090 correct_predictions 945 unknown_predictions 32 accuracy: 86.69724770642202
current_samples 1091 correct_predictions 946 unknown_predictions 32 accuracy: 86.70944087992667
current_samples 1092 correct_predictions 947 unknown_predictions 32 accuracy: 86.72161172161172
current_samples 1093 correct_predictions 948 unknown_predictions 32 accuracy: 86.73376029277219
Invalid Prediction for dataset_evaluate\Person07\person07248+0+30.jpg | Prediction Name - person05
current_samples 1094 correct_predictions 948 unknown_predictions 32 accuracy: 86.654478976234
current_samples 1095 correct_predictions 949 unknown_predictions 32 accuracy: 86.66666666666667
current_samples 1096 correct_predictions 950 unknown_predictions 32 accuracy: 86.67883211678831
current_samples 1097 correct_predictions 951 unknown_predictions 32 accuracy: 86.69097538742024
current_samples 1098 correct_predictions 952 unknown_predictions 32 accuracy: 86.70309653916212
Invalid Prediction for dataset_evaluate\Person07\person07253+15-90.jpg | Prediction Name - person04
current_samples 1099 correct_predictions 952 unknown_predictions 32 accuracy: 86.62420382165605
current_samples 1100 correct_predictions 953 unknown_predictions 32 accuracy: 86.63636363636364
current_samples 1101 correct_predictions 954 unknown_predictions 32 accuracy: 86.64850136239782
current_samples 1102 correct_predictions 955 unknown_predictions 32 accuracy: 86.66061705989111
current_samples 1103 correct_predictions 956 unknown_predictions 32 accuracy: 86.67271078875794
current_samples 1104 correct_predictions 957 unknown_predictions 32 accuracy: 86.68478260869566
Invalid Prediction for dataset_evaluate\Person07\person07259+15+0.jpg | Prediction Name - person05
current_samples 1105 correct_predictions 957 unknown_predictions 32 accuracy: 86.60633484162896
current_samples 1106 correct_predictions 958 unknown_predictions 32 accuracy: 86.61844484629296
current_samples 1107 correct_predictions 959 unknown_predictions 32 accuracy: 86.63053297199639
current_samples 1108 correct_predictions 960 unknown_predictions 32 accuracy: 86.64259927797833
current_samples 1109 correct_predictions 961 unknown_predictions 32 accuracy: 86.6546438232642
current_samples 1110 correct_predictions 962 unknown_predictions 32 accuracy: 86.66666666666667
current_samples 1111 correct_predictions 963 unknown_predictions 32 accuracy: 86.67866786678667
current_samples 1112 correct_predictions 964 unknown_predictions 32 accuracy: 86.6906474820144
current_samples 1113 correct_predictions 965 unknown_predictions 32 accuracy: 86.7026055705301
current_samples 1114 correct_predictions 966 unknown_predictions 32 accuracy: 86.71454219030521
current_samples 1115 correct_predictions 967 unknown_predictions 32 accuracy: 86.72645739910314
current_samples 1116 correct_predictions 968 unknown_predictions 32 accuracy: 86.73835125448028
current_samples 1117 correct_predictions 969 unknown_predictions 32 accuracy: 86.75022381378693
current_samples 1118 correct_predictions 970 unknown_predictions 32 accuracy: 86.76207513416816
current_samples 1119 correct_predictions 971 unknown_predictions 32 accuracy: 86.77390527256479
Invalid Prediction for dataset_evaluate\Person07\person07274+30+30.jpg | Prediction Name - person06
current_samples 1120 correct_predictions 971 unknown_predictions 32 accuracy: 86.69642857142857
current_samples 1121 correct_predictions 972 unknown_predictions 32 accuracy: 86.70829616413917
current_samples 1122 correct_predictions 973 unknown_predictions 32 accuracy: 86.72014260249554
current_samples 1123 correct_predictions 974 unknown_predictions 32 accuracy: 86.73196794300979
current_samples 1124 correct_predictions 975 unknown_predictions 32 accuracy: 86.74377224199287
current_samples 1125 correct_predictions 976 unknown_predictions 32 accuracy: 86.75555555555555
current_samples 1126 correct_predictions 977 unknown_predictions 32 accuracy: 86.76731793960923
Invalid Prediction for dataset_evaluate\Person07\person07281+60-60.jpg | Prediction Name - person05
current_samples 1127 correct_predictions 977 unknown_predictions 32 accuracy: 86.69032830523514
Invalid Prediction for dataset_evaluate\Person07\person07282+60-45.jpg | Prediction Name - person05
current_samples 1128 correct_predictions 977 unknown_predictions 32 accuracy: 86.61347517730496
current_samples 1129 correct_predictions 978 unknown_predictions 32 accuracy: 86.62533215234721
current_samples 1130 correct_predictions 979 unknown_predictions 32 accuracy: 86.63716814159292
current_samples 1131 correct_predictions 980 unknown_predictions 32 accuracy: 86.64898320070733
current_samples 1132 correct_predictions 981 unknown_predictions 32 accuracy: 86.66077738515902
current_samples 1133 correct_predictions 982 unknown_predictions 32 accuracy: 86.67255075022065
current_samples 1134 correct_predictions 983 unknown_predictions 32 accuracy: 86.68430335097001
current_samples 1135 correct_predictions 984 unknown_predictions 32 accuracy: 86.69603524229075
current_samples 1136 correct_predictions 985 unknown_predictions 32 accuracy: 86.70774647887323
current_samples 1137 correct_predictions 986 unknown_predictions 32 accuracy: 86.71943711521548
Invalid Prediction for dataset_evaluate\Person07\person07292+90+0.jpg | Prediction Name - person06
current_samples 1138 correct_predictions 986 unknown_predictions 32 accuracy: 86.64323374340948
Invalid Prediction for dataset_evaluate\Person08\person08100-90+0.jpg | Prediction Name - person02
current_samples 1139 correct_predictions 986 unknown_predictions 32 accuracy: 86.56716417910447
Invalid Prediction for dataset_evaluate\Person08\person08101-60-90.jpg | Prediction Name - person04
current_samples 1140 correct_predictions 986 unknown_predictions 32 accuracy: 86.49122807017544
current_samples 1141 correct_predictions 987 unknown_predictions 32 accuracy: 86.50306748466258
current_samples 1142 correct_predictions 988 unknown_predictions 32 accuracy: 86.51488616462348
current_samples 1143 correct_predictions 989 unknown_predictions 32 accuracy: 86.52668416447943
Invalid Prediction for dataset_evaluate\Person08\person08105-60-30.jpg | Prediction Name - person02
current_samples 1144 correct_predictions 989 unknown_predictions 32 accuracy: 86.45104895104895
current_samples 1145 correct_predictions 990 unknown_predictions 32 accuracy: 86.46288209606988
current_samples 1146 correct_predictions 991 unknown_predictions 32 accuracy: 86.47469458987783
Invalid Prediction for dataset_evaluate\Person08\person08108-60+15.jpg | Prediction Name - person04
current_samples 1147 correct_predictions 991 unknown_predictions 32 accuracy: 86.39930252833479
current_samples 1148 correct_predictions 992 unknown_predictions 32 accuracy: 86.41114982578398
Invalid Prediction for dataset_evaluate\Person08\person08110-60+45.jpg | Prediction Name - person02
current_samples 1149 correct_predictions 992 unknown_predictions 32 accuracy: 86.33594429939077
current_samples 1150 correct_predictions 993 unknown_predictions 32 accuracy: 86.34782608695653
current_samples 1151 correct_predictions 994 unknown_predictions 32 accuracy: 86.35968722849697
current_samples 1152 correct_predictions 995 unknown_predictions 32 accuracy: 86.37152777777779
current_samples 1153 correct_predictions 996 unknown_predictions 32 accuracy: 86.38334778837815
current_samples 1154 correct_predictions 997 unknown_predictions 32 accuracy: 86.39514731369151
current_samples 1155 correct_predictions 998 unknown_predictions 32 accuracy: 86.40692640692642
current_samples 1156 correct_predictions 999 unknown_predictions 32 accuracy: 86.41868512110726
current_samples 1157 correct_predictions 1000 unknown_predictions 32 accuracy: 86.4304235090752
current_samples 1158 correct_predictions 1001 unknown_predictions 32 accuracy: 86.44214162348878
current_samples 1159 correct_predictions 1002 unknown_predictions 32 accuracy: 86.45383951682484
current_samples 1160 correct_predictions 1003 unknown_predictions 32 accuracy: 86.4655172413793
current_samples 1161 correct_predictions 1004 unknown_predictions 32 accuracy: 86.47717484926787
Invalid Prediction for dataset_evaluate\Person08\person08124-30+60.jpg | Prediction Name - person07
current_samples 1162 correct_predictions 1004 unknown_predictions 32 accuracy: 86.40275387263338
current_samples 1163 correct_predictions 1005 unknown_predictions 32 accuracy: 86.41444539982803
current_samples 1164 correct_predictions 1006 unknown_predictions 32 accuracy: 86.42611683848797
current_samples 1165 correct_predictions 1007 unknown_predictions 32 accuracy: 86.43776824034335
current_samples 1166 correct_predictions 1008 unknown_predictions 32 accuracy: 86.44939965694682
current_samples 1167 correct_predictions 1009 unknown_predictions 32 accuracy: 86.46101113967438
current_samples 1168 correct_predictions 1010 unknown_predictions 32 accuracy: 86.47260273972603
current_samples 1169 correct_predictions 1011 unknown_predictions 32 accuracy: 86.4841745081266
current_samples 1170 correct_predictions 1012 unknown_predictions 32 accuracy: 86.4957264957265
current_samples 1171 correct_predictions 1013 unknown_predictions 32 accuracy: 86.5072587532024
current_samples 1172 correct_predictions 1014 unknown_predictions 32 accuracy: 86.51877133105802
current_samples 1173 correct_predictions 1015 unknown_predictions 32 accuracy: 86.53026427962489
current_samples 1174 correct_predictions 1016 unknown_predictions 32 accuracy: 86.54173764906304
current_samples 1175 correct_predictions 1017 unknown_predictions 32 accuracy: 86.55319148936171
current_samples 1176 correct_predictions 1018 unknown_predictions 32 accuracy: 86.56462585034014
current_samples 1177 correct_predictions 1019 unknown_predictions 32 accuracy: 86.57604078164826
Invalid Prediction for dataset_evaluate\Person08\person08140+0-90.jpg | Prediction Name - person06
current_samples 1178 correct_predictions 1019 unknown_predictions 32 accuracy: 86.5025466893039
current_samples 1179 correct_predictions 1020 unknown_predictions 32 accuracy: 86.51399491094148
current_samples 1180 correct_predictions 1021 unknown_predictions 32 accuracy: 86.52542372881355
current_samples 1181 correct_predictions 1022 unknown_predictions 32 accuracy: 86.53683319221
Invalid Prediction for dataset_evaluate\Person08\person08144+0-30.jpg | Prediction Name - person06
current_samples 1182 correct_predictions 1022 unknown_predictions 32 accuracy: 86.46362098138748
current_samples 1183 correct_predictions 1023 unknown_predictions 32 accuracy: 86.47506339814032
current_samples 1184 correct_predictions 1024 unknown_predictions 32 accuracy: 86.48648648648648
current_samples 1185 correct_predictions 1025 unknown_predictions 32 accuracy: 86.49789029535864
current_samples 1186 correct_predictions 1026 unknown_predictions 32 accuracy: 86.50927487352446
current_samples 1187 correct_predictions 1027 unknown_predictions 32 accuracy: 86.52064026958719
current_samples 1188 correct_predictions 1028 unknown_predictions 32 accuracy: 86.53198653198653
current_samples 1189 correct_predictions 1029 unknown_predictions 32 accuracy: 86.54331370899916
Invalid Prediction for dataset_evaluate\Person08\person08152+0+90.jpg | Prediction Name - person06
current_samples 1190 correct_predictions 1029 unknown_predictions 32 accuracy: 86.47058823529412
current_samples 1191 correct_predictions 1030 unknown_predictions 32 accuracy: 86.48194794290512
current_samples 1192 correct_predictions 1031 unknown_predictions 32 accuracy: 86.49328859060402
current_samples 1193 correct_predictions 1032 unknown_predictions 32 accuracy: 86.5046102263202
current_samples 1194 correct_predictions 1033 unknown_predictions 32 accuracy: 86.51591289782245
current_samples 1195 correct_predictions 1034 unknown_predictions 32 accuracy: 86.52719665271967
current_samples 1196 correct_predictions 1035 unknown_predictions 32 accuracy: 86.53846153846155
current_samples 1197 correct_predictions 1036 unknown_predictions 32 accuracy: 86.54970760233918
current_samples 1198 correct_predictions 1037 unknown_predictions 32 accuracy: 86.56093489148581
Invalid Prediction for dataset_evaluate\Person08\person08161+15+30.jpg | Prediction Name - person12
current_samples 1199 correct_predictions 1037 unknown_predictions 32 accuracy: 86.48874061718098
current_samples 1200 correct_predictions 1038 unknown_predictions 32 accuracy: 86.5
current_samples 1201 correct_predictions 1039 unknown_predictions 32 accuracy: 86.511240632806
current_samples 1202 correct_predictions 1040 unknown_predictions 32 accuracy: 86.522462562396
current_samples 1203 correct_predictions 1041 unknown_predictions 32 accuracy: 86.53366583541147
current_samples 1204 correct_predictions 1042 unknown_predictions 32 accuracy: 86.54485049833886
current_samples 1205 correct_predictions 1043 unknown_predictions 32 accuracy: 86.55601659751038
current_samples 1206 correct_predictions 1044 unknown_predictions 32 accuracy: 86.56716417910447
current_samples 1207 correct_predictions 1045 unknown_predictions 32 accuracy: 86.57829328914664
current_samples 1208 correct_predictions 1046 unknown_predictions 32 accuracy: 86.58940397350993
Invalid Prediction for dataset_evaluate\Person08\person08171+30-15.jpg | Prediction Name - person04
current_samples 1209 correct_predictions 1046 unknown_predictions 32 accuracy: 86.51778329197684
current_samples 1210 correct_predictions 1047 unknown_predictions 32 accuracy: 86.52892561983471
current_samples 1211 correct_predictions 1048 unknown_predictions 32 accuracy: 86.54004954582989
current_samples 1212 correct_predictions 1049 unknown_predictions 32 accuracy: 86.55115511551155
current_samples 1213 correct_predictions 1050 unknown_predictions 32 accuracy: 86.56224237427865
Invalid Prediction for dataset_evaluate\Person08\person08176+30+60.jpg | Prediction Name - person04
current_samples 1214 correct_predictions 1050 unknown_predictions 32 accuracy: 86.49093904448105
Invalid Prediction for dataset_evaluate\Person08\person08177+30+75.jpg | Prediction Name - person06
current_samples 1215 correct_predictions 1050 unknown_predictions 32 accuracy: 86.41975308641975
current_samples 1216 correct_predictions 1051 unknown_predictions 32 accuracy: 86.43092105263158
Invalid Prediction for dataset_evaluate\Person08\person08179+60-90.jpg | Prediction Name - person06
current_samples 1217 correct_predictions 1051 unknown_predictions 32 accuracy: 86.35990139687758
current_samples 1218 correct_predictions 1052 unknown_predictions 32 accuracy: 86.37110016420363
current_samples 1219 correct_predictions 1053 unknown_predictions 32 accuracy: 86.38228055783429
current_samples 1220 correct_predictions 1054 unknown_predictions 32 accuracy: 86.39344262295083
current_samples 1221 correct_predictions 1055 unknown_predictions 32 accuracy: 86.4045864045864
current_samples 1222 correct_predictions 1056 unknown_predictions 32 accuracy: 86.41571194762683
current_samples 1223 correct_predictions 1057 unknown_predictions 32 accuracy: 86.42681929681112
current_samples 1224 correct_predictions 1058 unknown_predictions 32 accuracy: 86.43790849673204
Invalid Prediction for dataset_evaluate\Person08\person08187+60+30.jpg | Prediction Name - person07
current_samples 1225 correct_predictions 1058 unknown_predictions 32 accuracy: 86.36734693877551
current_samples 1226 correct_predictions 1059 unknown_predictions 32 accuracy: 86.3784665579119
current_samples 1227 correct_predictions 1060 unknown_predictions 32 accuracy: 86.38956805215973
Invalid Prediction for dataset_evaluate\Person08\person08190+60+75.jpg | Prediction Name - person04
current_samples 1228 correct_predictions 1060 unknown_predictions 32 accuracy: 86.31921824104235
current_samples 1229 correct_predictions 1061 unknown_predictions 32 accuracy: 86.33034987794956
Invalid Prediction for dataset_evaluate\Person08\person08192+90+0.jpg | Prediction Name - person02
current_samples 1230 correct_predictions 1061 unknown_predictions 32 accuracy: 86.260162601626
Invalid Prediction for dataset_evaluate\Person08\person08200-90+0.jpg | Prediction Name - person09
current_samples 1231 correct_predictions 1061 unknown_predictions 32 accuracy: 86.19008935824533
current_samples 1232 correct_predictions 1062 unknown_predictions 32 accuracy: 86.2012987012987
current_samples 1233 correct_predictions 1063 unknown_predictions 32 accuracy: 86.2124898621249
current_samples 1234 correct_predictions 1064 unknown_predictions 32 accuracy: 86.22366288492707
current_samples 1235 correct_predictions 1065 unknown_predictions 32 accuracy: 86.23481781376519
current_samples 1236 correct_predictions 1066 unknown_predictions 32 accuracy: 86.24595469255664
current_samples 1237 correct_predictions 1067 unknown_predictions 32 accuracy: 86.25707356507681
current_samples 1238 correct_predictions 1068 unknown_predictions 32 accuracy: 86.26817447495961
current_samples 1239 correct_predictions 1069 unknown_predictions 32 accuracy: 86.27925746569815
current_samples 1240 correct_predictions 1070 unknown_predictions 32 accuracy: 86.29032258064517
current_samples 1241 correct_predictions 1071 unknown_predictions 32 accuracy: 86.3013698630137
current_samples 1242 correct_predictions 1072 unknown_predictions 32 accuracy: 86.31239935587762
current_samples 1243 correct_predictions 1073 unknown_predictions 32 accuracy: 86.32341110217216
current_samples 1244 correct_predictions 1074 unknown_predictions 32 accuracy: 86.33440514469454
current_samples 1245 correct_predictions 1075 unknown_predictions 32 accuracy: 86.34538152610442
current_samples 1246 correct_predictions 1076 unknown_predictions 32 accuracy: 86.35634028892456
current_samples 1247 correct_predictions 1077 unknown_predictions 32 accuracy: 86.3672814755413
current_samples 1248 correct_predictions 1078 unknown_predictions 32 accuracy: 86.37820512820514
current_samples 1249 correct_predictions 1079 unknown_predictions 32 accuracy: 86.38911128903123
current_samples 1250 correct_predictions 1080 unknown_predictions 32 accuracy: 86.4
current_samples 1251 correct_predictions 1081 unknown_predictions 32 accuracy: 86.41087130295763
current_samples 1252 correct_predictions 1082 unknown_predictions 32 accuracy: 86.4217252396166
current_samples 1253 correct_predictions 1083 unknown_predictions 32 accuracy: 86.43256185155627
Invalid Prediction for dataset_evaluate\Person08\person08223-30+45.jpg | Prediction Name - person04
current_samples 1254 correct_predictions 1083 unknown_predictions 32 accuracy: 86.36363636363636
current_samples 1255 correct_predictions 1084 unknown_predictions 32 accuracy: 86.37450199203187
current_samples 1256 correct_predictions 1085 unknown_predictions 32 accuracy: 86.38535031847134
current_samples 1257 correct_predictions 1086 unknown_predictions 32 accuracy: 86.39618138424821
current_samples 1258 correct_predictions 1087 unknown_predictions 32 accuracy: 86.40699523052464
current_samples 1259 correct_predictions 1088 unknown_predictions 32 accuracy: 86.41779189833201
current_samples 1260 correct_predictions 1089 unknown_predictions 32 accuracy: 86.42857142857143
current_samples 1261 correct_predictions 1090 unknown_predictions 32 accuracy: 86.43933386201428
current_samples 1262 correct_predictions 1091 unknown_predictions 32 accuracy: 86.4500792393027
current_samples 1263 correct_predictions 1092 unknown_predictions 32 accuracy: 86.46080760095012
current_samples 1264 correct_predictions 1093 unknown_predictions 32 accuracy: 86.47151898734177
Invalid Prediction for dataset_evaluate\Person08\person08234-15+15.jpg | Prediction Name - person04
current_samples 1265 correct_predictions 1093 unknown_predictions 32 accuracy: 86.40316205533597
current_samples 1266 correct_predictions 1094 unknown_predictions 32 accuracy: 86.41390205371248
current_samples 1267 correct_predictions 1095 unknown_predictions 32 accuracy: 86.42462509865825
current_samples 1268 correct_predictions 1096 unknown_predictions 32 accuracy: 86.43533123028391
current_samples 1269 correct_predictions 1097 unknown_predictions 32 accuracy: 86.44602048857368
current_samples 1270 correct_predictions 1098 unknown_predictions 32 accuracy: 86.45669291338582
current_samples 1271 correct_predictions 1099 unknown_predictions 32 accuracy: 86.46734854445319
current_samples 1272 correct_predictions 1100 unknown_predictions 32 accuracy: 86.47798742138365
current_samples 1273 correct_predictions 1101 unknown_predictions 32 accuracy: 86.48860958366065
current_samples 1274 correct_predictions 1102 unknown_predictions 32 accuracy: 86.49921507064364
current_samples 1275 correct_predictions 1103 unknown_predictions 32 accuracy: 86.50980392156863
current_samples 1276 correct_predictions 1104 unknown_predictions 32 accuracy: 86.52037617554859
current_samples 1277 correct_predictions 1105 unknown_predictions 32 accuracy: 86.530931871574
current_samples 1278 correct_predictions 1106 unknown_predictions 32 accuracy: 86.5414710485133
current_samples 1279 correct_predictions 1107 unknown_predictions 32 accuracy: 86.55199374511336
current_samples 1280 correct_predictions 1108 unknown_predictions 32 accuracy: 86.5625
current_samples 1281 correct_predictions 1109 unknown_predictions 32 accuracy: 86.57298985167837
current_samples 1282 correct_predictions 1110 unknown_predictions 32 accuracy: 86.58346333853353
current_samples 1283 correct_predictions 1111 unknown_predictions 32 accuracy: 86.59392049883087
current_samples 1284 correct_predictions 1112 unknown_predictions 32 accuracy: 86.6043613707165
current_samples 1285 correct_predictions 1113 unknown_predictions 32 accuracy: 86.6147859922179
current_samples 1286 correct_predictions 1114 unknown_predictions 32 accuracy: 86.62519440124416
current_samples 1287 correct_predictions 1115 unknown_predictions 32 accuracy: 86.63558663558663
current_samples 1288 correct_predictions 1116 unknown_predictions 32 accuracy: 86.64596273291926
current_samples 1289 correct_predictions 1117 unknown_predictions 32 accuracy: 86.65632273079908
current_samples 1290 correct_predictions 1118 unknown_predictions 32 accuracy: 86.66666666666667
current_samples 1291 correct_predictions 1119 unknown_predictions 32 accuracy: 86.67699457784663
current_samples 1292 correct_predictions 1120 unknown_predictions 32 accuracy: 86.687306501548
current_samples 1293 correct_predictions 1121 unknown_predictions 32 accuracy: 86.69760247486465
current_samples 1294 correct_predictions 1122 unknown_predictions 32 accuracy: 86.70788253477589
current_samples 1295 correct_predictions 1123 unknown_predictions 32 accuracy: 86.71814671814671
current_samples 1296 correct_predictions 1124 unknown_predictions 32 accuracy: 86.72839506172839
current_samples 1297 correct_predictions 1125 unknown_predictions 32 accuracy: 86.73862760215883
current_samples 1298 correct_predictions 1126 unknown_predictions 32 accuracy: 86.74884437596302
current_samples 1299 correct_predictions 1127 unknown_predictions 32 accuracy: 86.7590454195535
current_samples 1300 correct_predictions 1128 unknown_predictions 32 accuracy: 86.76923076923076
current_samples 1301 correct_predictions 1129 unknown_predictions 32 accuracy: 86.77940046118371
current_samples 1302 correct_predictions 1130 unknown_predictions 32 accuracy: 86.78955453149003
current_samples 1303 correct_predictions 1131 unknown_predictions 32 accuracy: 86.79969301611665
current_samples 1304 correct_predictions 1132 unknown_predictions 32 accuracy: 86.80981595092024
current_samples 1305 correct_predictions 1133 unknown_predictions 32 accuracy: 86.8199233716475
current_samples 1306 correct_predictions 1134 unknown_predictions 32 accuracy: 86.83001531393569
current_samples 1307 correct_predictions 1135 unknown_predictions 32 accuracy: 86.84009181331292
current_samples 1308 correct_predictions 1136 unknown_predictions 32 accuracy: 86.85015290519877
current_samples 1309 correct_predictions 1137 unknown_predictions 32 accuracy: 86.86019862490451
current_samples 1310 correct_predictions 1138 unknown_predictions 32 accuracy: 86.8702290076336
current_samples 1311 correct_predictions 1139 unknown_predictions 32 accuracy: 86.88024408848207
current_samples 1312 correct_predictions 1140 unknown_predictions 32 accuracy: 86.89024390243902
current_samples 1313 correct_predictions 1141 unknown_predictions 32 accuracy: 86.9002284843869
current_samples 1314 correct_predictions 1142 unknown_predictions 32 accuracy: 86.91019786910198
current_samples 1315 correct_predictions 1143 unknown_predictions 32 accuracy: 86.92015209125475
current_samples 1316 correct_predictions 1144 unknown_predictions 32 accuracy: 86.93009118541033
current_samples 1317 correct_predictions 1145 unknown_predictions 32 accuracy: 86.94001518602886
current_samples 1318 correct_predictions 1146 unknown_predictions 32 accuracy: 86.94992412746586
current_samples 1319 correct_predictions 1147 unknown_predictions 32 accuracy: 86.9598180439727
current_samples 1320 correct_predictions 1148 unknown_predictions 32 accuracy: 86.96969696969697
current_samples 1321 correct_predictions 1149 unknown_predictions 32 accuracy: 86.97956093868282
current_samples 1322 correct_predictions 1150 unknown_predictions 32 accuracy: 86.9894099848714
current_samples 1323 correct_predictions 1151 unknown_predictions 32 accuracy: 86.99924414210129
Invalid Prediction for dataset_evaluate\Person09\person09100-90+0.jpg | Prediction Name - person15
current_samples 1324 correct_predictions 1151 unknown_predictions 32 accuracy: 86.93353474320242
Invalid Prediction for dataset_evaluate\Person09\person09104-60-45.jpg | Prediction Name - person05
current_samples 1325 correct_predictions 1151 unknown_predictions 32 accuracy: 86.86792452830188
Invalid Prediction for dataset_evaluate\Person09\person09105-60-30.jpg | Prediction Name - person07
current_samples 1326 correct_predictions 1151 unknown_predictions 32 accuracy: 86.8024132730015
current_samples 1327 correct_predictions 1152 unknown_predictions 32 accuracy: 86.81235870384324
current_samples 1328 correct_predictions 1153 unknown_predictions 32 accuracy: 86.82228915662651
Invalid Prediction for dataset_evaluate\Person09\person09108-60+15.jpg | Prediction Name - person01
current_samples 1329 correct_predictions 1153 unknown_predictions 32 accuracy: 86.75696012039127
current_samples 1330 correct_predictions 1154 unknown_predictions 32 accuracy: 86.76691729323308
Invalid Prediction for dataset_evaluate\Person09\person09114-30-90.jpg | Prediction Name - person05
current_samples 1331 correct_predictions 1154 unknown_predictions 32 accuracy: 86.70172802404207
current_samples 1332 correct_predictions 1155 unknown_predictions 32 accuracy: 86.71171171171171
Invalid Prediction for dataset_evaluate\Person09\person09116-30-60.jpg | Prediction Name - person07
current_samples 1333 correct_predictions 1155 unknown_predictions 32 accuracy: 86.64666166541636
current_samples 1334 correct_predictions 1156 unknown_predictions 32 accuracy: 86.65667166416792
Invalid Prediction for dataset_evaluate\Person09\person09118-30-30.jpg | Prediction Name - person07
current_samples 1335 correct_predictions 1156 unknown_predictions 32 accuracy: 86.59176029962546
current_samples 1336 correct_predictions 1157 unknown_predictions 32 accuracy: 86.60179640718563
current_samples 1337 correct_predictions 1158 unknown_predictions 32 accuracy: 86.61181750186987
Invalid Prediction for dataset_evaluate\Person09\person09121-30+15.jpg | Prediction Name - person05
current_samples 1338 correct_predictions 1158 unknown_predictions 32 accuracy: 86.54708520179372
Invalid Prediction for dataset_evaluate\Person09\person09122-30+30.jpg | Prediction Name - person05
current_samples 1339 correct_predictions 1158 unknown_predictions 32 accuracy: 86.4824495892457
current_samples 1340 correct_predictions 1159 unknown_predictions 32 accuracy: 86.49253731343283
Invalid Prediction for dataset_evaluate\Person09\person09124-30+60.jpg | Prediction Name - person06
current_samples 1341 correct_predictions 1159 unknown_predictions 32 accuracy: 86.42803877703207
current_samples 1342 correct_predictions 1160 unknown_predictions 32 accuracy: 86.43815201192251
current_samples 1343 correct_predictions 1161 unknown_predictions 32 accuracy: 86.4482501861504
current_samples 1344 correct_predictions 1162 unknown_predictions 32 accuracy: 86.45833333333334
current_samples 1345 correct_predictions 1163 unknown_predictions 32 accuracy: 86.46840148698884
current_samples 1346 correct_predictions 1164 unknown_predictions 32 accuracy: 86.47845468053492
Invalid Prediction for dataset_evaluate\Person09\person09132-15-15.jpg | Prediction Name - person15
current_samples 1347 correct_predictions 1164 unknown_predictions 32 accuracy: 86.41425389755011
current_samples 1348 correct_predictions 1165 unknown_predictions 32 accuracy: 86.42433234421365
current_samples 1349 correct_predictions 1166 unknown_predictions 32 accuracy: 86.43439584877687
current_samples 1350 correct_predictions 1167 unknown_predictions 32 accuracy: 86.44444444444444
Invalid Prediction for dataset_evaluate\Person09\person09136-15+45.jpg | Prediction Name - person04
current_samples 1351 correct_predictions 1167 unknown_predictions 32 accuracy: 86.38045891931903
current_samples 1352 correct_predictions 1168 unknown_predictions 32 accuracy: 86.3905325443787
current_samples 1353 correct_predictions 1169 unknown_predictions 32 accuracy: 86.40059127864006
Invalid Prediction for dataset_evaluate\Person09\person09139-15+90.jpg | Prediction Name - person04
current_samples 1354 correct_predictions 1169 unknown_predictions 32 accuracy: 86.33677991137371
current_samples 1355 correct_predictions 1170 unknown_predictions 32 accuracy: 86.34686346863468
Invalid Prediction for dataset_evaluate\Person09\person09141+0-75.jpg | Prediction Name - person07
current_samples 1356 correct_predictions 1170 unknown_predictions 32 accuracy: 86.28318584070797
current_samples 1357 correct_predictions 1171 unknown_predictions 32 accuracy: 86.29329403095063
current_samples 1358 correct_predictions 1172 unknown_predictions 32 accuracy: 86.30338733431518
current_samples 1359 correct_predictions 1173 unknown_predictions 32 accuracy: 86.31346578366445
current_samples 1360 correct_predictions 1174 unknown_predictions 32 accuracy: 86.32352941176471
current_samples 1361 correct_predictions 1175 unknown_predictions 32 accuracy: 86.33357825128581
current_samples 1362 correct_predictions 1176 unknown_predictions 32 accuracy: 86.34361233480176
Invalid Prediction for dataset_evaluate\Person09\person09148+0+30.jpg | Prediction Name - person04
current_samples 1363 correct_predictions 1176 unknown_predictions 32 accuracy: 86.28026412325752
current_samples 1364 correct_predictions 1177 unknown_predictions 32 accuracy: 86.29032258064517
current_samples 1365 correct_predictions 1178 unknown_predictions 32 accuracy: 86.3003663003663
Invalid Prediction for dataset_evaluate\Person09\person09151+0+75.jpg | Prediction Name - person04
current_samples 1366 correct_predictions 1178 unknown_predictions 32 accuracy: 86.23718887262079
current_samples 1367 correct_predictions 1179 unknown_predictions 32 accuracy: 86.24725676664228
Invalid Prediction for dataset_evaluate\Person09\person09153+15-90.jpg | Prediction Name - person07
current_samples 1368 correct_predictions 1179 unknown_predictions 32 accuracy: 86.18421052631578
current_samples 1369 correct_predictions 1180 unknown_predictions 32 accuracy: 86.19430241051863
current_samples 1370 correct_predictions 1181 unknown_predictions 32 accuracy: 86.2043795620438
Invalid Prediction for dataset_evaluate\Person09\person09156+15-45.jpg | Prediction Name - person07
current_samples 1371 correct_predictions 1181 unknown_predictions 32 accuracy: 86.14150255288111
current_samples 1372 correct_predictions 1182 unknown_predictions 32 accuracy: 86.15160349854227
current_samples 1373 correct_predictions 1183 unknown_predictions 32 accuracy: 86.16168973051711
current_samples 1374 correct_predictions 1184 unknown_predictions 32 accuracy: 86.17176128093159
Invalid Prediction for dataset_evaluate\Person09\person09160+15+15.jpg | Prediction Name - person05
current_samples 1375 correct_predictions 1184 unknown_predictions 32 accuracy: 86.10909090909091
current_samples 1376 correct_predictions 1185 unknown_predictions 32 accuracy: 86.11918604651163
Invalid Prediction for dataset_evaluate\Person09\person09162+15+45.jpg | Prediction Name - person07
current_samples 1377 correct_predictions 1185 unknown_predictions 32 accuracy: 86.05664488017429
Invalid Prediction for dataset_evaluate\Person09\person09163+15+60.jpg | Prediction Name - person07
current_samples 1378 correct_predictions 1185 unknown_predictions 32 accuracy: 85.99419448476053
current_samples 1379 correct_predictions 1186 unknown_predictions 32 accuracy: 86.00435097897027
current_samples 1380 correct_predictions 1187 unknown_predictions 32 accuracy: 86.01449275362319
current_samples 1381 correct_predictions 1188 unknown_predictions 32 accuracy: 86.02461984069515
current_samples 1382 correct_predictions 1189 unknown_predictions 32 accuracy: 86.03473227206948
current_samples 1383 correct_predictions 1190 unknown_predictions 32 accuracy: 86.04483007953723
current_samples 1384 correct_predictions 1191 unknown_predictions 32 accuracy: 86.05491329479769
Invalid Prediction for dataset_evaluate\Person09\person09170+30-30.jpg | Prediction Name - person06
current_samples 1385 correct_predictions 1191 unknown_predictions 32 accuracy: 85.9927797833935
current_samples 1386 correct_predictions 1192 unknown_predictions 32 accuracy: 86.002886002886
current_samples 1387 correct_predictions 1193 unknown_predictions 32 accuracy: 86.01297764960346
current_samples 1388 correct_predictions 1194 unknown_predictions 32 accuracy: 86.02305475504323
current_samples 1389 correct_predictions 1195 unknown_predictions 32 accuracy: 86.03311735061196
current_samples 1390 correct_predictions 1196 unknown_predictions 32 accuracy: 86.0431654676259
current_samples 1391 correct_predictions 1197 unknown_predictions 32 accuracy: 86.05319913731128
Invalid Prediction for dataset_evaluate\Person09\person09177+30+75.jpg | Prediction Name - person04
current_samples 1392 correct_predictions 1197 unknown_predictions 32 accuracy: 85.99137931034483
Invalid Prediction for dataset_evaluate\Person09\person09178+30+90.jpg | Prediction Name - person06
current_samples 1393 correct_predictions 1197 unknown_predictions 32 accuracy: 85.92964824120602
Invalid Prediction for dataset_evaluate\Person09\person09179+60-90.jpg | Prediction Name - person04
current_samples 1394 correct_predictions 1197 unknown_predictions 32 accuracy: 85.86800573888091
current_samples 1395 correct_predictions 1198 unknown_predictions 32 accuracy: 85.87813620071685
current_samples 1396 correct_predictions 1199 unknown_predictions 32 accuracy: 85.88825214899714
Invalid Prediction for dataset_evaluate\Person09\person09182+60-45.jpg | Prediction Name - person06
current_samples 1397 correct_predictions 1199 unknown_predictions 32 accuracy: 85.8267716535433
current_samples 1398 correct_predictions 1200 unknown_predictions 32 accuracy: 85.83690987124464
Invalid Prediction for dataset_evaluate\Person09\person09184+60-15.jpg | Prediction Name - person05
current_samples 1399 correct_predictions 1200 unknown_predictions 32 accuracy: 85.77555396711936
current_samples 1400 correct_predictions 1201 unknown_predictions 32 accuracy: 85.78571428571429
current_samples 1401 correct_predictions 1202 unknown_predictions 32 accuracy: 85.79586009992862
Invalid Prediction for dataset_evaluate\Person09\person09187+60+30.jpg | Prediction Name - person07
current_samples 1402 correct_predictions 1202 unknown_predictions 32 accuracy: 85.73466476462197
Invalid Prediction for dataset_evaluate\Person09\person09188+60+45.jpg | Prediction Name - person04
current_samples 1403 correct_predictions 1202 unknown_predictions 32 accuracy: 85.6735566642908
current_samples 1404 correct_predictions 1203 unknown_predictions 32 accuracy: 85.68376068376068
Invalid Prediction for dataset_evaluate\Person09\person09190+60+75.jpg | Prediction Name - person06
current_samples 1405 correct_predictions 1203 unknown_predictions 32 accuracy: 85.62277580071175
current_samples 1406 correct_predictions 1204 unknown_predictions 32 accuracy: 85.6330014224751
Invalid Prediction for dataset_evaluate\Person09\person09192+90+0.jpg | Prediction Name - person07
current_samples 1407 correct_predictions 1204 unknown_predictions 32 accuracy: 85.57213930348259
current_samples 1408 correct_predictions 1205 unknown_predictions 32 accuracy: 85.58238636363636
Invalid Prediction for dataset_evaluate\Person09\person09201-60-90.jpg | Prediction Name - person06
current_samples 1409 correct_predictions 1205 unknown_predictions 32 accuracy: 85.52164655784244
Invalid Prediction for dataset_evaluate\Person09\person09202-60-75.jpg | Prediction Name - person06
current_samples 1410 correct_predictions 1205 unknown_predictions 32 accuracy: 85.46099290780141
current_samples 1411 correct_predictions 1206 unknown_predictions 32 accuracy: 85.47129695251596
Invalid Prediction for dataset_evaluate\Person09\person09204-60-45.jpg | Prediction Name - person06
current_samples 1412 correct_predictions 1206 unknown_predictions 32 accuracy: 85.41076487252126
current_samples 1413 correct_predictions 1207 unknown_predictions 32 accuracy: 85.42108987968861
current_samples 1414 correct_predictions 1208 unknown_predictions 32 accuracy: 85.43140028288543
current_samples 1415 correct_predictions 1209 unknown_predictions 32 accuracy: 85.4416961130742
current_samples 1416 correct_predictions 1210 unknown_predictions 32 accuracy: 85.45197740112994
Invalid Prediction for dataset_evaluate\Person09\person09209-60+30.jpg | Prediction Name - person06
current_samples 1417 correct_predictions 1210 unknown_predictions 32 accuracy: 85.39167254763585
current_samples 1418 correct_predictions 1211 unknown_predictions 32 accuracy: 85.40197461212976
Invalid Prediction for dataset_evaluate\Person09\person09214-30-90.jpg | Prediction Name - person07
current_samples 1419 correct_predictions 1211 unknown_predictions 32 accuracy: 85.34178999295278
current_samples 1420 correct_predictions 1212 unknown_predictions 32 accuracy: 85.35211267605634
current_samples 1421 correct_predictions 1213 unknown_predictions 32 accuracy: 85.36242083040113
current_samples 1422 correct_predictions 1214 unknown_predictions 32 accuracy: 85.37271448663853
current_samples 1423 correct_predictions 1215 unknown_predictions 32 accuracy: 85.38299367533381
current_samples 1424 correct_predictions 1216 unknown_predictions 32 accuracy: 85.39325842696628
current_samples 1425 correct_predictions 1217 unknown_predictions 32 accuracy: 85.40350877192982
current_samples 1426 correct_predictions 1218 unknown_predictions 32 accuracy: 85.41374474053296
current_samples 1427 correct_predictions 1219 unknown_predictions 32 accuracy: 85.42396636299931
current_samples 1428 correct_predictions 1220 unknown_predictions 32 accuracy: 85.43417366946778
current_samples 1429 correct_predictions 1221 unknown_predictions 32 accuracy: 85.444366689993
current_samples 1430 correct_predictions 1222 unknown_predictions 32 accuracy: 85.45454545454545
current_samples 1431 correct_predictions 1223 unknown_predictions 32 accuracy: 85.46470999301188
current_samples 1432 correct_predictions 1224 unknown_predictions 32 accuracy: 85.47486033519553
Invalid Prediction for dataset_evaluate\Person09\person09228-15-75.jpg | Prediction Name - person06
current_samples 1433 correct_predictions 1224 unknown_predictions 32 accuracy: 85.4152128401954
current_samples 1434 correct_predictions 1225 unknown_predictions 32 accuracy: 85.42538354253836
Invalid Prediction for dataset_evaluate\Person09\person09230-15-45.jpg | Prediction Name - person04
current_samples 1435 correct_predictions 1225 unknown_predictions 32 accuracy: 85.36585365853658
current_samples 1436 correct_predictions 1226 unknown_predictions 32 accuracy: 85.37604456824512
Invalid Prediction for dataset_evaluate\Person09\person09232-15-15.jpg | Prediction Name - person06
current_samples 1437 correct_predictions 1226 unknown_predictions 32 accuracy: 85.31663187195547
current_samples 1438 correct_predictions 1227 unknown_predictions 32 accuracy: 85.32684283727399
current_samples 1439 correct_predictions 1228 unknown_predictions 32 accuracy: 85.33703961084086
Invalid Prediction for dataset_evaluate\Person09\person09235-15+30.jpg | Prediction Name - person06
current_samples 1440 correct_predictions 1228 unknown_predictions 32 accuracy: 85.27777777777777
current_samples 1441 correct_predictions 1229 unknown_predictions 32 accuracy: 85.28799444829978
current_samples 1442 correct_predictions 1230 unknown_predictions 32 accuracy: 85.29819694868237
current_samples 1443 correct_predictions 1231 unknown_predictions 32 accuracy: 85.3083853083853
current_samples 1444 correct_predictions 1232 unknown_predictions 32 accuracy: 85.3185595567867
Invalid Prediction for dataset_evaluate\Person09\person09240+0-90.jpg | Prediction Name - person08
current_samples 1445 correct_predictions 1232 unknown_predictions 32 accuracy: 85.25951557093425
current_samples 1446 correct_predictions 1233 unknown_predictions 32 accuracy: 85.26970954356847
current_samples 1447 correct_predictions 1234 unknown_predictions 32 accuracy: 85.27988942639945
current_samples 1448 correct_predictions 1235 unknown_predictions 32 accuracy: 85.29005524861878
current_samples 1449 correct_predictions 1236 unknown_predictions 32 accuracy: 85.30020703933747
current_samples 1450 correct_predictions 1237 unknown_predictions 32 accuracy: 85.3103448275862
current_samples 1451 correct_predictions 1238 unknown_predictions 32 accuracy: 85.32046864231563
current_samples 1452 correct_predictions 1239 unknown_predictions 32 accuracy: 85.3305785123967
current_samples 1453 correct_predictions 1240 unknown_predictions 32 accuracy: 85.34067446662078
Invalid Prediction for dataset_evaluate\Person09\person09249+0+45.jpg | Prediction Name - person04
current_samples 1454 correct_predictions 1240 unknown_predictions 32 accuracy: 85.28198074277854
current_samples 1455 correct_predictions 1241 unknown_predictions 32 accuracy: 85.29209621993127
current_samples 1456 correct_predictions 1242 unknown_predictions 32 accuracy: 85.3021978021978
current_samples 1457 correct_predictions 1243 unknown_predictions 32 accuracy: 85.31228551818806
current_samples 1458 correct_predictions 1244 unknown_predictions 32 accuracy: 85.32235939643347
current_samples 1459 correct_predictions 1245 unknown_predictions 32 accuracy: 85.33241946538726
Invalid Prediction for dataset_evaluate\Person09\person09255+15-60.jpg | Prediction Name - person04
current_samples 1460 correct_predictions 1245 unknown_predictions 32 accuracy: 85.27397260273972
current_samples 1461 correct_predictions 1246 unknown_predictions 32 accuracy: 85.28405201916496
current_samples 1462 correct_predictions 1247 unknown_predictions 32 accuracy: 85.29411764705883
current_samples 1463 correct_predictions 1248 unknown_predictions 32 accuracy: 85.30416951469583
current_samples 1464 correct_predictions 1249 unknown_predictions 32 accuracy: 85.31420765027322
current_samples 1465 correct_predictions 1250 unknown_predictions 32 accuracy: 85.32423208191126
current_samples 1466 correct_predictions 1251 unknown_predictions 32 accuracy: 85.33424283765348
current_samples 1467 correct_predictions 1252 unknown_predictions 32 accuracy: 85.34423994546694
current_samples 1468 correct_predictions 1253 unknown_predictions 32 accuracy: 85.35422343324251
Invalid Prediction for dataset_evaluate\Person09\person09264+15+75.jpg | Prediction Name - person08
current_samples 1469 correct_predictions 1253 unknown_predictions 32 accuracy: 85.29611980939414
current_samples 1470 correct_predictions 1254 unknown_predictions 32 accuracy: 85.3061224489796
Invalid Prediction for dataset_evaluate\Person09\person09266+30-90.jpg | Prediction Name - person06
current_samples 1471 correct_predictions 1254 unknown_predictions 32 accuracy: 85.24813052345344
current_samples 1472 correct_predictions 1255 unknown_predictions 32 accuracy: 85.25815217391305
current_samples 1473 correct_predictions 1256 unknown_predictions 32 accuracy: 85.26816021724372
current_samples 1474 correct_predictions 1257 unknown_predictions 32 accuracy: 85.27815468113975
current_samples 1475 correct_predictions 1258 unknown_predictions 32 accuracy: 85.28813559322033
current_samples 1476 correct_predictions 1259 unknown_predictions 32 accuracy: 85.29810298102981
current_samples 1477 correct_predictions 1260 unknown_predictions 32 accuracy: 85.30805687203792
Invalid Prediction for dataset_evaluate\Person09\person09273+30+15.jpg | Prediction Name - person06
current_samples 1478 correct_predictions 1260 unknown_predictions 32 accuracy: 85.25033829499323
current_samples 1479 correct_predictions 1261 unknown_predictions 32 accuracy: 85.26031102096012
current_samples 1480 correct_predictions 1262 unknown_predictions 32 accuracy: 85.27027027027026
current_samples 1481 correct_predictions 1263 unknown_predictions 32 accuracy: 85.28021607022282
current_samples 1482 correct_predictions 1264 unknown_predictions 32 accuracy: 85.2901484480432
current_samples 1483 correct_predictions 1265 unknown_predictions 32 accuracy: 85.30006743088335
Invalid Prediction for dataset_evaluate\Person09\person09279+60-90.jpg | Prediction Name - person06
current_samples 1484 correct_predictions 1265 unknown_predictions 32 accuracy: 85.24258760107817
current_samples 1485 correct_predictions 1266 unknown_predictions 32 accuracy: 85.25252525252526
current_samples 1486 correct_predictions 1267 unknown_predictions 32 accuracy: 85.26244952893674
current_samples 1487 correct_predictions 1268 unknown_predictions 32 accuracy: 85.27236045729657
Invalid Prediction for dataset_evaluate\Person09\person09283+60-30.jpg | Prediction Name - person08
current_samples 1488 correct_predictions 1268 unknown_predictions 32 accuracy: 85.21505376344086
current_samples 1489 correct_predictions 1269 unknown_predictions 32 accuracy: 85.2249832102082
current_samples 1490 correct_predictions 1270 unknown_predictions 32 accuracy: 85.23489932885906
current_samples 1491 correct_predictions 1271 unknown_predictions 32 accuracy: 85.2448021462106
current_samples 1492 correct_predictions 1272 unknown_predictions 32 accuracy: 85.25469168900804
current_samples 1493 correct_predictions 1273 unknown_predictions 32 accuracy: 85.26456798392499
current_samples 1494 correct_predictions 1274 unknown_predictions 32 accuracy: 85.27443105756359
current_samples 1495 correct_predictions 1275 unknown_predictions 32 accuracy: 85.28428093645485
current_samples 1496 correct_predictions 1276 unknown_predictions 32 accuracy: 85.29411764705883
current_samples 1497 correct_predictions 1277 unknown_predictions 32 accuracy: 85.30394121576487
Invalid Prediction for dataset_evaluate\Person10\person10101-60-90.jpg | Prediction Name - person06
current_samples 1498 correct_predictions 1277 unknown_predictions 32 accuracy: 85.24699599465954
current_samples 1499 correct_predictions 1278 unknown_predictions 32 accuracy: 85.25683789192794
Invalid Prediction for dataset_evaluate\Person10\person10103-60-60.jpg | Prediction Name - person03
current_samples 1500 correct_predictions 1278 unknown_predictions 32 accuracy: 85.2
current_samples 1501 correct_predictions 1279 unknown_predictions 32 accuracy: 85.20986009327115
Invalid Prediction for dataset_evaluate\Person10\person10105-60-30.jpg | Prediction Name - person09
current_samples 1502 correct_predictions 1279 unknown_predictions 32 accuracy: 85.15312916111851
current_samples 1503 correct_predictions 1280 unknown_predictions 32 accuracy: 85.16300731869593
Invalid Prediction for dataset_evaluate\Person10\person10107-60+0.jpg | Prediction Name - person09
current_samples 1504 correct_predictions 1280 unknown_predictions 32 accuracy: 85.1063829787234
current_samples 1505 correct_predictions 1281 unknown_predictions 32 accuracy: 85.11627906976744
current_samples 1506 correct_predictions 1282 unknown_predictions 32 accuracy: 85.1261620185923
Invalid Prediction for dataset_evaluate\Person10\person10110-60+45.jpg | Prediction Name - person06
current_samples 1507 correct_predictions 1282 unknown_predictions 32 accuracy: 85.06967485069676
current_samples 1508 correct_predictions 1283 unknown_predictions 32 accuracy: 85.07957559681698
Invalid Prediction for dataset_evaluate\Person10\person10112-60+75.jpg | Prediction Name - person03
current_samples 1509 correct_predictions 1283 unknown_predictions 32 accuracy: 85.02319416832339
current_samples 1510 correct_predictions 1284 unknown_predictions 32 accuracy: 85.03311258278146
Invalid Prediction for dataset_evaluate\Person10\person10114-30-90.jpg | Prediction Name - person09
current_samples 1511 correct_predictions 1284 unknown_predictions 32 accuracy: 84.97683653209795
current_samples 1512 correct_predictions 1285 unknown_predictions 32 accuracy: 84.9867724867725
Invalid Prediction for dataset_evaluate\Person10\person10116-30-60.jpg | Prediction Name - person04
current_samples 1513 correct_predictions 1285 unknown_predictions 32 accuracy: 84.93060145406477
Invalid Prediction for dataset_evaluate\Person10\person10117-30-45.jpg | Prediction Name - person09
current_samples 1514 correct_predictions 1285 unknown_predictions 32 accuracy: 84.87450462351387
current_samples 1515 correct_predictions 1286 unknown_predictions 32 accuracy: 84.88448844884489
current_samples 1516 correct_predictions 1287 unknown_predictions 32 accuracy: 84.89445910290237
current_samples 1517 correct_predictions 1288 unknown_predictions 32 accuracy: 84.90441661173368
Invalid Prediction for dataset_evaluate\Person10\person10121-30+15.jpg | Prediction Name - person09
current_samples 1518 correct_predictions 1288 unknown_predictions 32 accuracy: 84.84848484848484
current_samples 1519 correct_predictions 1289 unknown_predictions 32 accuracy: 84.85845951283738
Invalid Prediction for dataset_evaluate\Person10\person10123-30+45.jpg | Prediction Name - person09
current_samples 1520 correct_predictions 1289 unknown_predictions 32 accuracy: 84.80263157894737
current_samples 1521 correct_predictions 1290 unknown_predictions 32 accuracy: 84.81262327416174
current_samples 1522 correct_predictions 1291 unknown_predictions 32 accuracy: 84.82260183968464
Invalid Prediction for dataset_evaluate\Person10\person10126-30+90.jpg | Prediction Name - person09
current_samples 1523 correct_predictions 1291 unknown_predictions 32 accuracy: 84.76690741956664
Invalid Prediction for dataset_evaluate\Person10\person10127-15-90.jpg | Prediction Name - person09
current_samples 1524 correct_predictions 1291 unknown_predictions 32 accuracy: 84.71128608923884
current_samples 1525 correct_predictions 1292 unknown_predictions 32 accuracy: 84.72131147540983
Invalid Prediction for dataset_evaluate\Person10\person10129-15-60.jpg | Prediction Name - person09
current_samples 1526 correct_predictions 1292 unknown_predictions 32 accuracy: 84.66579292267366
current_samples 1527 correct_predictions 1293 unknown_predictions 32 accuracy: 84.67583497053045
current_samples 1528 correct_predictions 1294 unknown_predictions 32 accuracy: 84.68586387434554
current_samples 1529 correct_predictions 1295 unknown_predictions 32 accuracy: 84.69587965990843
current_samples 1530 correct_predictions 1296 unknown_predictions 32 accuracy: 84.70588235294117
current_samples 1531 correct_predictions 1297 unknown_predictions 32 accuracy: 84.71587197909864
Invalid Prediction for dataset_evaluate\Person10\person10135-15+30.jpg | Prediction Name - person04
current_samples 1532 correct_predictions 1297 unknown_predictions 32 accuracy: 84.66057441253264
current_samples 1533 correct_predictions 1298 unknown_predictions 32 accuracy: 84.67058056099151
current_samples 1534 correct_predictions 1299 unknown_predictions 32 accuracy: 84.68057366362451
current_samples 1535 correct_predictions 1300 unknown_predictions 32 accuracy: 84.69055374592834
current_samples 1536 correct_predictions 1301 unknown_predictions 32 accuracy: 84.70052083333334
Invalid Prediction for dataset_evaluate\Person10\person10140+0-90.jpg | Prediction Name - person09
current_samples 1537 correct_predictions 1301 unknown_predictions 32 accuracy: 84.64541314248535
Invalid Prediction for dataset_evaluate\Person10\person10141+0-75.jpg | Prediction Name - person09
current_samples 1538 correct_predictions 1301 unknown_predictions 32 accuracy: 84.59037711313394
Invalid Prediction for dataset_evaluate\Person10\person10142+0-60.jpg | Prediction Name - person09
current_samples 1539 correct_predictions 1301 unknown_predictions 32 accuracy: 84.53541260558805
Invalid Prediction for dataset_evaluate\Person10\person10143+0-45.jpg | Prediction Name - person09
current_samples 1540 correct_predictions 1301 unknown_predictions 32 accuracy: 84.48051948051948
current_samples 1541 correct_predictions 1302 unknown_predictions 32 accuracy: 84.4905905256327
current_samples 1542 correct_predictions 1303 unknown_predictions 32 accuracy: 84.50064850843061
current_samples 1543 correct_predictions 1304 unknown_predictions 32 accuracy: 84.51069345430979
current_samples 1544 correct_predictions 1305 unknown_predictions 32 accuracy: 84.52072538860104
current_samples 1545 correct_predictions 1306 unknown_predictions 32 accuracy: 84.53074433656957
Invalid Prediction for dataset_evaluate\Person10\person10149+0+45.jpg | Prediction Name - person09
current_samples 1546 correct_predictions 1306 unknown_predictions 32 accuracy: 84.47606727037517
current_samples 1547 correct_predictions 1307 unknown_predictions 32 accuracy: 84.48610213316095
current_samples 1548 correct_predictions 1308 unknown_predictions 32 accuracy: 84.49612403100775
Invalid Prediction for dataset_evaluate\Person10\person10152+0+90.jpg | Prediction Name - person09
current_samples 1549 correct_predictions 1308 unknown_predictions 32 accuracy: 84.44157520981278
current_samples 1550 correct_predictions 1309 unknown_predictions 32 accuracy: 84.45161290322581
Invalid Prediction for dataset_evaluate\Person10\person10154+15-75.jpg | Prediction Name - person09
current_samples 1551 correct_predictions 1309 unknown_predictions 32 accuracy: 84.39716312056737
current_samples 1552 correct_predictions 1310 unknown_predictions 32 accuracy: 84.40721649484536
current_samples 1553 correct_predictions 1311 unknown_predictions 32 accuracy: 84.41725692208628
current_samples 1554 correct_predictions 1312 unknown_predictions 32 accuracy: 84.42728442728443
current_samples 1555 correct_predictions 1313 unknown_predictions 32 accuracy: 84.43729903536978
current_samples 1556 correct_predictions 1314 unknown_predictions 32 accuracy: 84.44730077120822
current_samples 1557 correct_predictions 1315 unknown_predictions 32 accuracy: 84.4572896596018
current_samples 1558 correct_predictions 1316 unknown_predictions 32 accuracy: 84.46726572528883
current_samples 1559 correct_predictions 1317 unknown_predictions 32 accuracy: 84.47722899294419
current_samples 1560 correct_predictions 1318 unknown_predictions 32 accuracy: 84.48717948717949
current_samples 1561 correct_predictions 1319 unknown_predictions 32 accuracy: 84.49711723254325
current_samples 1562 correct_predictions 1320 unknown_predictions 32 accuracy: 84.50704225352112
Invalid Prediction for dataset_evaluate\Person10\person10166+30-90.jpg | Prediction Name - person03
current_samples 1563 correct_predictions 1320 unknown_predictions 32 accuracy: 84.45297504798465
current_samples 1564 correct_predictions 1321 unknown_predictions 32 accuracy: 84.46291560102301
current_samples 1565 correct_predictions 1322 unknown_predictions 32 accuracy: 84.47284345047923
current_samples 1566 correct_predictions 1323 unknown_predictions 32 accuracy: 84.48275862068965
current_samples 1567 correct_predictions 1324 unknown_predictions 32 accuracy: 84.49266113592853
Invalid Prediction for dataset_evaluate\Person10\person10171+30-15.jpg | Prediction Name - person06
current_samples 1568 correct_predictions 1324 unknown_predictions 32 accuracy: 84.43877551020408
current_samples 1569 correct_predictions 1325 unknown_predictions 32 accuracy: 84.44869343530912
Invalid Prediction for dataset_evaluate\Person10\person10173+30+15.jpg | Prediction Name - person04
current_samples 1570 correct_predictions 1325 unknown_predictions 32 accuracy: 84.39490445859873
current_samples 1571 correct_predictions 1326 unknown_predictions 32 accuracy: 84.40483768300446
Invalid Prediction for dataset_evaluate\Person10\person10175+30+45.jpg | Prediction Name - person09
current_samples 1572 correct_predictions 1326 unknown_predictions 32 accuracy: 84.35114503816794
current_samples 1573 correct_predictions 1327 unknown_predictions 32 accuracy: 84.36109345200255
Invalid Prediction for dataset_evaluate\Person10\person10177+30+75.jpg | Prediction Name - person03
current_samples 1574 correct_predictions 1327 unknown_predictions 32 accuracy: 84.30749682337992
current_samples 1575 correct_predictions 1328 unknown_predictions 32 accuracy: 84.31746031746032
Invalid Prediction for dataset_evaluate\Person10\person10179+60-90.jpg | Prediction Name - person01
current_samples 1576 correct_predictions 1328 unknown_predictions 32 accuracy: 84.26395939086294
Invalid Prediction for dataset_evaluate\Person10\person10180+60-75.jpg | Prediction Name - person04
current_samples 1577 correct_predictions 1328 unknown_predictions 32 accuracy: 84.21052631578947
current_samples 1578 correct_predictions 1329 unknown_predictions 32 accuracy: 84.22053231939164
Invalid Prediction for dataset_evaluate\Person10\person10182+60-45.jpg | Prediction Name - person03
current_samples 1579 correct_predictions 1329 unknown_predictions 32 accuracy: 84.16719442685245
current_samples 1580 correct_predictions 1330 unknown_predictions 32 accuracy: 84.17721518987342
current_samples 1581 correct_predictions 1331 unknown_predictions 32 accuracy: 84.18722327640734
current_samples 1582 correct_predictions 1332 unknown_predictions 32 accuracy: 84.19721871049305
current_samples 1583 correct_predictions 1333 unknown_predictions 32 accuracy: 84.20720151610865
current_samples 1584 correct_predictions 1334 unknown_predictions 32 accuracy: 84.21717171717171
current_samples 1585 correct_predictions 1335 unknown_predictions 32 accuracy: 84.22712933753942
current_samples 1586 correct_predictions 1336 unknown_predictions 32 accuracy: 84.23707440100883
current_samples 1587 correct_predictions 1337 unknown_predictions 32 accuracy: 84.24700693131695
current_samples 1588 correct_predictions 1338 unknown_predictions 32 accuracy: 84.25692695214106
Invalid Prediction for dataset_evaluate\Person10\person10200-90+0.jpg | Prediction Name - person05
current_samples 1589 correct_predictions 1338 unknown_predictions 32 accuracy: 84.2039018250472
Invalid Prediction for dataset_evaluate\Person10\person10201-60-90.jpg | Prediction Name - person09
current_samples 1590 correct_predictions 1338 unknown_predictions 32 accuracy: 84.15094339622642
Invalid Prediction for dataset_evaluate\Person10\person10202-60-75.jpg | Prediction Name - person09
current_samples 1591 correct_predictions 1338 unknown_predictions 32 accuracy: 84.098051539912
Invalid Prediction for dataset_evaluate\Person10\person10203-60-60.jpg | Prediction Name - person09
current_samples 1592 correct_predictions 1338 unknown_predictions 32 accuracy: 84.04522613065326
current_samples 1593 correct_predictions 1339 unknown_predictions 32 accuracy: 84.05524168236033
Invalid Prediction for dataset_evaluate\Person10\person10205-60-30.jpg | Prediction Name - person09
current_samples 1594 correct_predictions 1339 unknown_predictions 32 accuracy: 84.00250941028858
Invalid Prediction for dataset_evaluate\Person10\person10206-60-15.jpg | Prediction Name - person09
current_samples 1595 correct_predictions 1339 unknown_predictions 32 accuracy: 83.94984326018809
current_samples 1596 correct_predictions 1340 unknown_predictions 32 accuracy: 83.95989974937343
Invalid Prediction for dataset_evaluate\Person10\person10208-60+15.jpg | Prediction Name - person09
current_samples 1597 correct_predictions 1340 unknown_predictions 32 accuracy: 83.9073262366938
Invalid Prediction for dataset_evaluate\Person10\person10209-60+30.jpg | Prediction Name - person09
current_samples 1598 correct_predictions 1340 unknown_predictions 32 accuracy: 83.85481852315394
Invalid Prediction for dataset_evaluate\Person10\person10214-30-90.jpg | Prediction Name - person07
current_samples 1599 correct_predictions 1340 unknown_predictions 32 accuracy: 83.80237648530331
current_samples 1600 correct_predictions 1341 unknown_predictions 32 accuracy: 83.8125
current_samples 1601 correct_predictions 1342 unknown_predictions 32 accuracy: 83.82261086820736
Invalid Prediction for dataset_evaluate\Person10\person10217-30-45.jpg | Prediction Name - person09
current_samples 1602 correct_predictions 1342 unknown_predictions 32 accuracy: 83.77028714107367
Invalid Prediction for dataset_evaluate\Person10\person10218-30-30.jpg | Prediction Name - person09
current_samples 1603 correct_predictions 1342 unknown_predictions 32 accuracy: 83.71802869619464
current_samples 1604 correct_predictions 1343 unknown_predictions 32 accuracy: 83.7281795511222
current_samples 1605 correct_predictions 1344 unknown_predictions 32 accuracy: 83.73831775700936
current_samples 1606 correct_predictions 1345 unknown_predictions 32 accuracy: 83.74844333748443
Invalid Prediction for dataset_evaluate\Person10\person10222-30+30.jpg | Prediction Name - person09
current_samples 1607 correct_predictions 1345 unknown_predictions 32 accuracy: 83.6963285625389
current_samples 1608 correct_predictions 1346 unknown_predictions 32 accuracy: 83.70646766169155
current_samples 1609 correct_predictions 1347 unknown_predictions 32 accuracy: 83.71659415786202
current_samples 1610 correct_predictions 1348 unknown_predictions 32 accuracy: 83.72670807453416
current_samples 1611 correct_predictions 1349 unknown_predictions 32 accuracy: 83.73680943513345
Invalid Prediction for dataset_evaluate\Person10\person10229-15-60.jpg | Prediction Name - person09
current_samples 1612 correct_predictions 1349 unknown_predictions 32 accuracy: 83.6848635235732
current_samples 1613 correct_predictions 1350 unknown_predictions 32 accuracy: 83.69497830130193
current_samples 1614 correct_predictions 1351 unknown_predictions 32 accuracy: 83.70508054522925
Invalid Prediction for dataset_evaluate\Person10\person10232-15-15.jpg | Prediction Name - person09
current_samples 1615 correct_predictions 1351 unknown_predictions 32 accuracy: 83.6532507739938
current_samples 1616 correct_predictions 1352 unknown_predictions 32 accuracy: 83.66336633663366
current_samples 1617 correct_predictions 1353 unknown_predictions 32 accuracy: 83.6734693877551
current_samples 1618 correct_predictions 1354 unknown_predictions 32 accuracy: 83.68355995055624
current_samples 1619 correct_predictions 1355 unknown_predictions 32 accuracy: 83.69363804817789
current_samples 1620 correct_predictions 1356 unknown_predictions 32 accuracy: 83.7037037037037
current_samples 1621 correct_predictions 1357 unknown_predictions 32 accuracy: 83.7137569401604
current_samples 1622 correct_predictions 1358 unknown_predictions 32 accuracy: 83.72379778051788
current_samples 1623 correct_predictions 1359 unknown_predictions 32 accuracy: 83.73382624768946
current_samples 1624 correct_predictions 1360 unknown_predictions 32 accuracy: 83.74384236453201
current_samples 1625 correct_predictions 1361 unknown_predictions 32 accuracy: 83.75384615384615
current_samples 1626 correct_predictions 1362 unknown_predictions 32 accuracy: 83.76383763837639
Invalid Prediction for dataset_evaluate\Person10\person10244+0-30.jpg | Prediction Name - person09
current_samples 1627 correct_predictions 1362 unknown_predictions 32 accuracy: 83.71235402581438
current_samples 1628 correct_predictions 1363 unknown_predictions 32 accuracy: 83.72235872235872
current_samples 1629 correct_predictions 1364 unknown_predictions 32 accuracy: 83.73235113566605
Invalid Prediction for dataset_evaluate\Person10\person10247+0+15.jpg | Prediction Name - person09
current_samples 1630 correct_predictions 1364 unknown_predictions 32 accuracy: 83.68098159509204
Invalid Prediction for dataset_evaluate\Person10\person10248+0+30.jpg | Prediction Name - person09
current_samples 1631 correct_predictions 1364 unknown_predictions 32 accuracy: 83.62967504598406
current_samples 1632 correct_predictions 1365 unknown_predictions 32 accuracy: 83.63970588235294
current_samples 1633 correct_predictions 1366 unknown_predictions 32 accuracy: 83.64972443355786
Invalid Prediction for dataset_evaluate\Person10\person10251+0+75.jpg | Prediction Name - person09
current_samples 1634 correct_predictions 1366 unknown_predictions 32 accuracy: 83.5985312117503
current_samples 1635 correct_predictions 1367 unknown_predictions 32 accuracy: 83.6085626911315
current_samples 1636 correct_predictions 1368 unknown_predictions 32 accuracy: 83.61858190709046
current_samples 1637 correct_predictions 1369 unknown_predictions 32 accuracy: 83.62858888210141
current_samples 1638 correct_predictions 1370 unknown_predictions 32 accuracy: 83.63858363858364
current_samples 1639 correct_predictions 1371 unknown_predictions 32 accuracy: 83.64856619890178
current_samples 1640 correct_predictions 1372 unknown_predictions 32 accuracy: 83.65853658536585
current_samples 1641 correct_predictions 1373 unknown_predictions 32 accuracy: 83.66849482023156
current_samples 1642 correct_predictions 1374 unknown_predictions 32 accuracy: 83.67844092570037
current_samples 1643 correct_predictions 1375 unknown_predictions 32 accuracy: 83.68837492391967
current_samples 1644 correct_predictions 1376 unknown_predictions 32 accuracy: 83.69829683698296
current_samples 1645 correct_predictions 1377 unknown_predictions 32 accuracy: 83.70820668693008
Invalid Prediction for dataset_evaluate\Person10\person10263+15+60.jpg | Prediction Name - person09
current_samples 1646 correct_predictions 1377 unknown_predictions 32 accuracy: 83.65735115431349
Invalid Prediction for dataset_evaluate\Person10\person10264+15+75.jpg | Prediction Name - person06
current_samples 1647 correct_predictions 1377 unknown_predictions 32 accuracy: 83.60655737704919
current_samples 1648 correct_predictions 1378 unknown_predictions 32 accuracy: 83.61650485436894
current_samples 1649 correct_predictions 1379 unknown_predictions 32 accuracy: 83.62644026682838
current_samples 1650 correct_predictions 1380 unknown_predictions 32 accuracy: 83.63636363636363
Invalid Prediction for dataset_evaluate\Person10\person10268+30-60.jpg | Prediction Name - person09
current_samples 1651 correct_predictions 1380 unknown_predictions 32 accuracy: 83.58570563294973
current_samples 1652 correct_predictions 1381 unknown_predictions 32 accuracy: 83.5956416464891
current_samples 1653 correct_predictions 1382 unknown_predictions 32 accuracy: 83.60556563823351
current_samples 1654 correct_predictions 1383 unknown_predictions 32 accuracy: 83.61547762998791
Invalid Prediction for dataset_evaluate\Person10\person10272+30+0.jpg | Prediction Name - person06
current_samples 1655 correct_predictions 1383 unknown_predictions 32 accuracy: 83.56495468277946
current_samples 1656 correct_predictions 1384 unknown_predictions 32 accuracy: 83.57487922705315
Invalid Prediction for dataset_evaluate\Person10\person10274+30+30.jpg | Prediction Name - person09
current_samples 1657 correct_predictions 1384 unknown_predictions 32 accuracy: 83.52444176222087
current_samples 1658 correct_predictions 1385 unknown_predictions 32 accuracy: 83.53437876960193
current_samples 1659 correct_predictions 1386 unknown_predictions 32 accuracy: 83.54430379746836
current_samples 1660 correct_predictions 1387 unknown_predictions 32 accuracy: 83.55421686746988
current_samples 1661 correct_predictions 1388 unknown_predictions 32 accuracy: 83.5641180012041
Invalid Prediction for dataset_evaluate\Person10\person10279+60-90.jpg | Prediction Name - person04
current_samples 1662 correct_predictions 1388 unknown_predictions 32 accuracy: 83.51383874849579
current_samples 1663 correct_predictions 1389 unknown_predictions 32 accuracy: 83.52375225496091
current_samples 1664 correct_predictions 1390 unknown_predictions 32 accuracy: 83.53365384615384
Invalid Prediction for dataset_evaluate\Person10\person10282+60-45.jpg | Prediction Name - person09
current_samples 1665 correct_predictions 1390 unknown_predictions 32 accuracy: 83.48348348348348
current_samples 1666 correct_predictions 1391 unknown_predictions 32 accuracy: 83.49339735894358
Invalid Prediction for dataset_evaluate\Person10\person10284+60-15.jpg | Prediction Name - person09
current_samples 1667 correct_predictions 1391 unknown_predictions 32 accuracy: 83.44331133773245
current_samples 1668 correct_predictions 1392 unknown_predictions 32 accuracy: 83.45323741007195
current_samples 1669 correct_predictions 1393 unknown_predictions 32 accuracy: 83.4631515877771
Invalid Prediction for dataset_evaluate\Person10\person10287+60+30.jpg | Prediction Name - person06
current_samples 1670 correct_predictions 1393 unknown_predictions 32 accuracy: 83.41317365269461
current_samples 1671 correct_predictions 1394 unknown_predictions 32 accuracy: 83.4230999401556
current_samples 1672 correct_predictions 1395 unknown_predictions 32 accuracy: 83.43301435406698
Invalid Prediction for dataset_evaluate\Person10\person10290+60+75.jpg | Prediction Name - person06
current_samples 1673 correct_predictions 1395 unknown_predictions 32 accuracy: 83.38314405260012
current_samples 1674 correct_predictions 1396 unknown_predictions 32 accuracy: 83.39307048984467
Invalid Prediction for dataset_evaluate\Person11\person11101-60-90.jpg | Prediction Name - person07
current_samples 1675 correct_predictions 1396 unknown_predictions 32 accuracy: 83.34328358208955
current_samples 1676 correct_predictions 1397 unknown_predictions 32 accuracy: 83.35322195704057
Invalid Prediction for dataset_evaluate\Person11\person11103-60-60.jpg | Prediction Name - person09
current_samples 1677 correct_predictions 1397 unknown_predictions 32 accuracy: 83.30351818723912
current_samples 1678 correct_predictions 1398 unknown_predictions 32 accuracy: 83.3134684147795
current_samples 1679 correct_predictions 1399 unknown_predictions 32 accuracy: 83.32340678975581
Invalid Prediction for dataset_evaluate\Person11\person11106-60-15.jpg | Prediction Name - person06
current_samples 1680 correct_predictions 1399 unknown_predictions 32 accuracy: 83.27380952380953
Invalid Prediction for dataset_evaluate\Person11\person11107-60+0.jpg | Prediction Name - person06
current_samples 1681 correct_predictions 1399 unknown_predictions 32 accuracy: 83.2242712671029
Invalid Prediction for dataset_evaluate\Person11\person11108-60+15.jpg | Prediction Name - person09
current_samples 1682 correct_predictions 1399 unknown_predictions 32 accuracy: 83.17479191438764
current_samples 1683 correct_predictions 1400 unknown_predictions 32 accuracy: 83.184789067142
Invalid Prediction for dataset_evaluate\Person11\person11110-60+45.jpg | Prediction Name - person09
current_samples 1684 correct_predictions 1400 unknown_predictions 32 accuracy: 83.1353919239905
Invalid Prediction for dataset_evaluate\Person11\person11111-60+60.jpg | Prediction Name - person05
current_samples 1685 correct_predictions 1400 unknown_predictions 32 accuracy: 83.08605341246292
current_samples 1686 correct_predictions 1401 unknown_predictions 32 accuracy: 83.09608540925268
Invalid Prediction for dataset_evaluate\Person11\person11115-30-75.jpg | Prediction Name - person10
current_samples 1687 correct_predictions 1401 unknown_predictions 32 accuracy: 83.04682868998222
current_samples 1688 correct_predictions 1402 unknown_predictions 32 accuracy: 83.0568720379147
current_samples 1689 correct_predictions 1403 unknown_predictions 32 accuracy: 83.06690349319123
current_samples 1690 correct_predictions 1404 unknown_predictions 32 accuracy: 83.07692307692308
current_samples 1691 correct_predictions 1405 unknown_predictions 32 accuracy: 83.0869308101715
current_samples 1692 correct_predictions 1406 unknown_predictions 32 accuracy: 83.096926713948
Invalid Prediction for dataset_evaluate\Person11\person11121-30+15.jpg | Prediction Name - person09
current_samples 1693 correct_predictions 1406 unknown_predictions 32 accuracy: 83.04784406379208
current_samples 1694 correct_predictions 1407 unknown_predictions 32 accuracy: 83.05785123966942
Invalid Prediction for dataset_evaluate\Person11\person11123-30+45.jpg | Prediction Name - person06
current_samples 1695 correct_predictions 1407 unknown_predictions 32 accuracy: 83.00884955752213
Invalid Prediction for dataset_evaluate\Person11\person11124-30+60.jpg | Prediction Name - person09
current_samples 1696 correct_predictions 1407 unknown_predictions 32 accuracy: 82.95990566037736
Invalid Prediction for dataset_evaluate\Person11\person11125-30+75.jpg | Prediction Name - person05
current_samples 1697 correct_predictions 1407 unknown_predictions 32 accuracy: 82.91101944608133
current_samples 1698 correct_predictions 1408 unknown_predictions 32 accuracy: 82.92108362779742
Invalid Prediction for dataset_evaluate\Person11\person11127-15-90.jpg | Prediction Name - person10
current_samples 1699 correct_predictions 1408 unknown_predictions 32 accuracy: 82.87227781047675
current_samples 1700 correct_predictions 1409 unknown_predictions 32 accuracy: 82.88235294117648
current_samples 1701 correct_predictions 1410 unknown_predictions 32 accuracy: 82.89241622574956
current_samples 1702 correct_predictions 1411 unknown_predictions 32 accuracy: 82.90246768507637
Invalid Prediction for dataset_evaluate\Person11\person11131-15-30.jpg | Prediction Name - person09
current_samples 1703 correct_predictions 1411 unknown_predictions 32 accuracy: 82.85378743394011
Invalid Prediction for dataset_evaluate\Person11\person11132-15-15.jpg | Prediction Name - person09
current_samples 1704 correct_predictions 1411 unknown_predictions 32 accuracy: 82.80516431924883
current_samples 1705 correct_predictions 1412 unknown_predictions 32 accuracy: 82.81524926686217
current_samples 1706 correct_predictions 1413 unknown_predictions 32 accuracy: 82.8253223915592
current_samples 1707 correct_predictions 1414 unknown_predictions 32 accuracy: 82.83538371411834
Invalid Prediction for dataset_evaluate\Person11\person11136-15+45.jpg | Prediction Name - person09
current_samples 1708 correct_predictions 1414 unknown_predictions 32 accuracy: 82.78688524590164
current_samples 1709 correct_predictions 1415 unknown_predictions 32 accuracy: 82.79695728496196
current_samples 1710 correct_predictions 1416 unknown_predictions 32 accuracy: 82.80701754385966
current_samples 1711 correct_predictions 1417 unknown_predictions 32 accuracy: 82.81706604324957
current_samples 1712 correct_predictions 1418 unknown_predictions 32 accuracy: 82.82710280373831
current_samples 1713 correct_predictions 1419 unknown_predictions 32 accuracy: 82.83712784588442
Invalid Prediction for dataset_evaluate\Person11\person11142+0-60.jpg | Prediction Name - person07
current_samples 1714 correct_predictions 1419 unknown_predictions 32 accuracy: 82.78879813302217
current_samples 1715 correct_predictions 1420 unknown_predictions 32 accuracy: 82.79883381924198
current_samples 1716 correct_predictions 1421 unknown_predictions 32 accuracy: 82.80885780885781
current_samples 1717 correct_predictions 1422 unknown_predictions 32 accuracy: 82.81887012230634
current_samples 1718 correct_predictions 1423 unknown_predictions 32 accuracy: 82.82887077997671
current_samples 1719 correct_predictions 1424 unknown_predictions 32 accuracy: 82.83885980221058
Invalid Prediction for dataset_evaluate\Person11\person11148+0+30.jpg | Prediction Name - person09
current_samples 1720 correct_predictions 1424 unknown_predictions 32 accuracy: 82.7906976744186
current_samples 1721 correct_predictions 1425 unknown_predictions 32 accuracy: 82.80069726902963
Invalid Prediction for dataset_evaluate\Person11\person11150+0+60.jpg | Prediction Name - person09
current_samples 1722 correct_predictions 1425 unknown_predictions 32 accuracy: 82.75261324041811
current_samples 1723 correct_predictions 1426 unknown_predictions 32 accuracy: 82.76262333139871
current_samples 1724 correct_predictions 1427 unknown_predictions 32 accuracy: 82.77262180974478
Invalid Prediction for dataset_evaluate\Person11\person11153+15-90.jpg | Prediction Name - person10
current_samples 1725 correct_predictions 1427 unknown_predictions 32 accuracy: 82.72463768115942
current_samples 1726 correct_predictions 1428 unknown_predictions 32 accuracy: 82.73464658169178
current_samples 1727 correct_predictions 1429 unknown_predictions 32 accuracy: 82.7446438911407
current_samples 1728 correct_predictions 1430 unknown_predictions 32 accuracy: 82.75462962962963
current_samples 1729 correct_predictions 1431 unknown_predictions 32 accuracy: 82.7646038172354
current_samples 1730 correct_predictions 1432 unknown_predictions 32 accuracy: 82.77456647398844
Invalid Prediction for dataset_evaluate\Person11\person11159+15+0.jpg | Prediction Name - person12
current_samples 1731 correct_predictions 1432 unknown_predictions 32 accuracy: 82.72674754477181
current_samples 1732 correct_predictions 1433 unknown_predictions 32 accuracy: 82.73672055427251
current_samples 1733 correct_predictions 1434 unknown_predictions 32 accuracy: 82.7466820542412
current_samples 1734 correct_predictions 1435 unknown_predictions 32 accuracy: 82.75663206459055
Invalid Prediction for dataset_evaluate\Person11\person11163+15+60.jpg | Prediction Name - person05
current_samples 1735 correct_predictions 1435 unknown_predictions 32 accuracy: 82.70893371757924
current_samples 1736 correct_predictions 1436 unknown_predictions 32 accuracy: 82.7188940092166
current_samples 1737 correct_predictions 1437 unknown_predictions 32 accuracy: 82.72884283246978
current_samples 1738 correct_predictions 1438 unknown_predictions 32 accuracy: 82.73878020713464
current_samples 1739 correct_predictions 1439 unknown_predictions 32 accuracy: 82.74870615296147
current_samples 1740 correct_predictions 1440 unknown_predictions 32 accuracy: 82.75862068965517
current_samples 1741 correct_predictions 1441 unknown_predictions 32 accuracy: 82.76852383687536
Invalid Prediction for dataset_evaluate\Person11\person11170+30-30.jpg | Prediction Name - person09
current_samples 1742 correct_predictions 1441 unknown_predictions 32 accuracy: 82.72101033295063
current_samples 1743 correct_predictions 1442 unknown_predictions 32 accuracy: 82.73092369477911
current_samples 1744 correct_predictions 1443 unknown_predictions 32 accuracy: 82.7408256880734
current_samples 1745 correct_predictions 1444 unknown_predictions 32 accuracy: 82.75071633237823
current_samples 1746 correct_predictions 1445 unknown_predictions 32 accuracy: 82.76059564719358
current_samples 1747 correct_predictions 1446 unknown_predictions 32 accuracy: 82.77046365197481
current_samples 1748 correct_predictions 1447 unknown_predictions 32 accuracy: 82.78032036613271
current_samples 1749 correct_predictions 1448 unknown_predictions 32 accuracy: 82.79016580903374
current_samples 1750 correct_predictions 1449 unknown_predictions 32 accuracy: 82.8
Invalid Prediction for dataset_evaluate\Person11\person11179+60-90.jpg | Prediction Name - person07
current_samples 1751 correct_predictions 1449 unknown_predictions 32 accuracy: 82.75271273557966
current_samples 1752 correct_predictions 1450 unknown_predictions 32 accuracy: 82.76255707762557
Invalid Prediction for dataset_evaluate\Person11\person11181+60-60.jpg | Prediction Name - person06
current_samples 1753 correct_predictions 1450 unknown_predictions 32 accuracy: 82.7153451226469
current_samples 1754 correct_predictions 1451 unknown_predictions 32 accuracy: 82.72519954389966
current_samples 1755 correct_predictions 1452 unknown_predictions 32 accuracy: 82.73504273504273
current_samples 1756 correct_predictions 1453 unknown_predictions 32 accuracy: 82.74487471526196
current_samples 1757 correct_predictions 1454 unknown_predictions 32 accuracy: 82.75469550369948
Invalid Prediction for dataset_evaluate\Person11\person11186+60+15.jpg | Prediction Name - person10
current_samples 1758 correct_predictions 1454 unknown_predictions 32 accuracy: 82.70762229806598
Invalid Prediction for dataset_evaluate\Person11\person11187+60+30.jpg | Prediction Name - person01
current_samples 1759 correct_predictions 1454 unknown_predictions 32 accuracy: 82.66060261512223
current_samples 1760 correct_predictions 1455 unknown_predictions 32 accuracy: 82.67045454545455
current_samples 1761 correct_predictions 1456 unknown_predictions 32 accuracy: 82.68029528676888
current_samples 1762 correct_predictions 1457 unknown_predictions 32 accuracy: 82.69012485811578
Invalid Prediction for dataset_evaluate\Person11\person11191+60+90.jpg | Prediction Name - person05
current_samples 1763 correct_predictions 1457 unknown_predictions 32 accuracy: 82.64322178105502
Invalid Prediction for dataset_evaluate\Person11\person11192+90+0.jpg | Prediction Name - person09
current_samples 1764 correct_predictions 1457 unknown_predictions 32 accuracy: 82.59637188208617
Invalid Prediction for dataset_evaluate\Person11\person11200-90+0.jpg | Prediction Name - person04
current_samples 1765 correct_predictions 1457 unknown_predictions 32 accuracy: 82.54957507082153
current_samples 1766 correct_predictions 1458 unknown_predictions 32 accuracy: 82.55945639864099
current_samples 1767 correct_predictions 1459 unknown_predictions 32 accuracy: 82.56932654216186
current_samples 1768 correct_predictions 1460 unknown_predictions 32 accuracy: 82.57918552036199
current_samples 1769 correct_predictions 1461 unknown_predictions 32 accuracy: 82.58903335217637
current_samples 1770 correct_predictions 1462 unknown_predictions 32 accuracy: 82.59887005649718
current_samples 1771 correct_predictions 1463 unknown_predictions 32 accuracy: 82.6086956521739
current_samples 1772 correct_predictions 1464 unknown_predictions 32 accuracy: 82.61851015801355
current_samples 1773 correct_predictions 1465 unknown_predictions 32 accuracy: 82.6283135927806
current_samples 1774 correct_predictions 1466 unknown_predictions 32 accuracy: 82.63810597519729
current_samples 1775 correct_predictions 1467 unknown_predictions 32 accuracy: 82.64788732394366
current_samples 1776 correct_predictions 1468 unknown_predictions 32 accuracy: 82.65765765765765
current_samples 1777 correct_predictions 1469 unknown_predictions 32 accuracy: 82.66741699493528
current_samples 1778 correct_predictions 1470 unknown_predictions 32 accuracy: 82.67716535433071
current_samples 1779 correct_predictions 1471 unknown_predictions 32 accuracy: 82.68690275435638
current_samples 1780 correct_predictions 1472 unknown_predictions 32 accuracy: 82.69662921348313
current_samples 1781 correct_predictions 1473 unknown_predictions 32 accuracy: 82.70634475014037
current_samples 1782 correct_predictions 1474 unknown_predictions 32 accuracy: 82.71604938271605
current_samples 1783 correct_predictions 1475 unknown_predictions 32 accuracy: 82.72574312955693
current_samples 1784 correct_predictions 1476 unknown_predictions 32 accuracy: 82.7354260089686
current_samples 1785 correct_predictions 1477 unknown_predictions 32 accuracy: 82.74509803921568
current_samples 1786 correct_predictions 1478 unknown_predictions 32 accuracy: 82.75475923852184
current_samples 1787 correct_predictions 1479 unknown_predictions 32 accuracy: 82.76440962506994
current_samples 1788 correct_predictions 1480 unknown_predictions 32 accuracy: 82.77404921700223
current_samples 1789 correct_predictions 1481 unknown_predictions 32 accuracy: 82.78367803242035
current_samples 1790 correct_predictions 1482 unknown_predictions 32 accuracy: 82.79329608938546
current_samples 1791 correct_predictions 1483 unknown_predictions 32 accuracy: 82.80290340591849
current_samples 1792 correct_predictions 1484 unknown_predictions 32 accuracy: 82.8125
current_samples 1793 correct_predictions 1485 unknown_predictions 32 accuracy: 82.82208588957054
current_samples 1794 correct_predictions 1486 unknown_predictions 32 accuracy: 82.83166109253067
current_samples 1795 correct_predictions 1487 unknown_predictions 32 accuracy: 82.84122562674095
current_samples 1796 correct_predictions 1488 unknown_predictions 32 accuracy: 82.85077951002228
current_samples 1797 correct_predictions 1489 unknown_predictions 32 accuracy: 82.86032276015581
current_samples 1798 correct_predictions 1490 unknown_predictions 32 accuracy: 82.8698553948832
current_samples 1799 correct_predictions 1491 unknown_predictions 32 accuracy: 82.87937743190662
current_samples 1800 correct_predictions 1492 unknown_predictions 32 accuracy: 82.88888888888889
current_samples 1801 correct_predictions 1493 unknown_predictions 32 accuracy: 82.89838978345364
current_samples 1802 correct_predictions 1494 unknown_predictions 32 accuracy: 82.90788013318536
current_samples 1803 correct_predictions 1495 unknown_predictions 32 accuracy: 82.91735995562951
current_samples 1804 correct_predictions 1496 unknown_predictions 32 accuracy: 82.92682926829268
current_samples 1805 correct_predictions 1497 unknown_predictions 32 accuracy: 82.93628808864267
current_samples 1806 correct_predictions 1498 unknown_predictions 32 accuracy: 82.94573643410853
current_samples 1807 correct_predictions 1499 unknown_predictions 32 accuracy: 82.9551743220808
current_samples 1808 correct_predictions 1500 unknown_predictions 32 accuracy: 82.96460176991151
current_samples 1809 correct_predictions 1501 unknown_predictions 32 accuracy: 82.97401879491431
current_samples 1810 correct_predictions 1502 unknown_predictions 32 accuracy: 82.98342541436465
current_samples 1811 correct_predictions 1503 unknown_predictions 32 accuracy: 82.99282164549973
current_samples 1812 correct_predictions 1504 unknown_predictions 32 accuracy: 83.00220750551877
current_samples 1813 correct_predictions 1505 unknown_predictions 32 accuracy: 83.01158301158301
current_samples 1814 correct_predictions 1506 unknown_predictions 32 accuracy: 83.02094818081588
current_samples 1815 correct_predictions 1507 unknown_predictions 32 accuracy: 83.03030303030303
current_samples 1816 correct_predictions 1508 unknown_predictions 32 accuracy: 83.03964757709251
current_samples 1817 correct_predictions 1509 unknown_predictions 32 accuracy: 83.04898183819482
current_samples 1818 correct_predictions 1510 unknown_predictions 32 accuracy: 83.05830583058305
current_samples 1819 correct_predictions 1511 unknown_predictions 32 accuracy: 83.06761957119296
current_samples 1820 correct_predictions 1512 unknown_predictions 32 accuracy: 83.07692307692308
current_samples 1821 correct_predictions 1513 unknown_predictions 32 accuracy: 83.08621636463481
current_samples 1822 correct_predictions 1514 unknown_predictions 32 accuracy: 83.09549945115258
current_samples 1823 correct_predictions 1515 unknown_predictions 32 accuracy: 83.10477235326385
current_samples 1824 correct_predictions 1516 unknown_predictions 32 accuracy: 83.1140350877193
current_samples 1825 correct_predictions 1517 unknown_predictions 32 accuracy: 83.12328767123289
current_samples 1826 correct_predictions 1518 unknown_predictions 32 accuracy: 83.13253012048193
current_samples 1827 correct_predictions 1519 unknown_predictions 32 accuracy: 83.14176245210729
current_samples 1828 correct_predictions 1520 unknown_predictions 32 accuracy: 83.15098468271334
current_samples 1829 correct_predictions 1521 unknown_predictions 32 accuracy: 83.16019682886824
current_samples 1830 correct_predictions 1522 unknown_predictions 32 accuracy: 83.16939890710383
current_samples 1831 correct_predictions 1523 unknown_predictions 32 accuracy: 83.1785909339159
current_samples 1832 correct_predictions 1524 unknown_predictions 32 accuracy: 83.1877729257642
current_samples 1833 correct_predictions 1525 unknown_predictions 32 accuracy: 83.19694489907256
current_samples 1834 correct_predictions 1526 unknown_predictions 32 accuracy: 83.20610687022901
current_samples 1835 correct_predictions 1527 unknown_predictions 32 accuracy: 83.21525885558583
current_samples 1836 correct_predictions 1528 unknown_predictions 32 accuracy: 83.2244008714597
current_samples 1837 correct_predictions 1529 unknown_predictions 32 accuracy: 83.23353293413174
current_samples 1838 correct_predictions 1530 unknown_predictions 32 accuracy: 83.24265505984766
current_samples 1839 correct_predictions 1531 unknown_predictions 32 accuracy: 83.25176726481783
current_samples 1840 correct_predictions 1532 unknown_predictions 32 accuracy: 83.26086956521739
current_samples 1841 correct_predictions 1533 unknown_predictions 32 accuracy: 83.26996197718631
current_samples 1842 correct_predictions 1534 unknown_predictions 32 accuracy: 83.27904451682954
current_samples 1843 correct_predictions 1535 unknown_predictions 32 accuracy: 83.28811720021704
current_samples 1844 correct_predictions 1536 unknown_predictions 32 accuracy: 83.29718004338395
current_samples 1845 correct_predictions 1537 unknown_predictions 32 accuracy: 83.30623306233062
current_samples 1846 correct_predictions 1538 unknown_predictions 32 accuracy: 83.31527627302276
current_samples 1847 correct_predictions 1539 unknown_predictions 32 accuracy: 83.32430969139143
current_samples 1848 correct_predictions 1540 unknown_predictions 32 accuracy: 83.33333333333334
current_samples 1849 correct_predictions 1541 unknown_predictions 32 accuracy: 83.34234721471066
current_samples 1850 correct_predictions 1542 unknown_predictions 32 accuracy: 83.35135135135135
current_samples 1851 correct_predictions 1543 unknown_predictions 32 accuracy: 83.36034575904915
current_samples 1852 correct_predictions 1544 unknown_predictions 32 accuracy: 83.36933045356372
current_samples 1853 correct_predictions 1545 unknown_predictions 32 accuracy: 83.37830545062062
Invalid Prediction for dataset_evaluate\Person12\person12100-90+0.jpg | Prediction Name - person11
current_samples 1854 correct_predictions 1545 unknown_predictions 32 accuracy: 83.33333333333334
Invalid Prediction for dataset_evaluate\Person12\person12102-60-75.jpg | Prediction Name - person11
current_samples 1855 correct_predictions 1545 unknown_predictions 32 accuracy: 83.28840970350404
Invalid Prediction for dataset_evaluate\Person12\person12104-60-45.jpg | Prediction Name - person11
current_samples 1856 correct_predictions 1545 unknown_predictions 32 accuracy: 83.24353448275862
Invalid Prediction for dataset_evaluate\Person12\person12105-60-30.jpg | Prediction Name - person11
current_samples 1857 correct_predictions 1545 unknown_predictions 32 accuracy: 83.19870759289176
Invalid Prediction for dataset_evaluate\Person12\person12106-60-15.jpg | Prediction Name - person11
current_samples 1858 correct_predictions 1545 unknown_predictions 32 accuracy: 83.15392895586652
current_samples 1859 correct_predictions 1546 unknown_predictions 32 accuracy: 83.16299085529855
current_samples 1860 correct_predictions 1547 unknown_predictions 32 accuracy: 83.17204301075269
current_samples 1861 correct_predictions 1548 unknown_predictions 32 accuracy: 83.1810854379366
Invalid Prediction for dataset_evaluate\Person12\person12114-30-90.jpg | Prediction Name - person11
current_samples 1862 correct_predictions 1548 unknown_predictions 32 accuracy: 83.13641245972073
current_samples 1863 correct_predictions 1549 unknown_predictions 32 accuracy: 83.1454643048846
Invalid Prediction for dataset_evaluate\Person12\person12116-30-60.jpg | Prediction Name - person09
current_samples 1864 correct_predictions 1549 unknown_predictions 32 accuracy: 83.10085836909872
current_samples 1865 correct_predictions 1550 unknown_predictions 32 accuracy: 83.10991957104558
Invalid Prediction for dataset_evaluate\Person12\person12118-30-30.jpg | Prediction Name - person11
current_samples 1866 correct_predictions 1550 unknown_predictions 32 accuracy: 83.06538049303323
current_samples 1867 correct_predictions 1551 unknown_predictions 32 accuracy: 83.07445099089449
Invalid Prediction for dataset_evaluate\Person12\person12120-30+0.jpg | Prediction Name - person11
current_samples 1868 correct_predictions 1551 unknown_predictions 32 accuracy: 83.02997858672377
Invalid Prediction for dataset_evaluate\Person12\person12121-30+15.jpg | Prediction Name - person11
current_samples 1869 correct_predictions 1551 unknown_predictions 32 accuracy: 82.98555377207063
current_samples 1870 correct_predictions 1552 unknown_predictions 32 accuracy: 82.99465240641712
Invalid Prediction for dataset_evaluate\Person12\person12123-30+45.jpg | Prediction Name - person11
current_samples 1871 correct_predictions 1552 unknown_predictions 32 accuracy: 82.95029396044896
current_samples 1872 correct_predictions 1553 unknown_predictions 32 accuracy: 82.95940170940172
Invalid Prediction for dataset_evaluate\Person12\person12125-30+75.jpg | Prediction Name - person10
current_samples 1873 correct_predictions 1553 unknown_predictions 32 accuracy: 82.91510945008008
Invalid Prediction for dataset_evaluate\Person12\person12127-15-90.jpg | Prediction Name - person11
current_samples 1874 correct_predictions 1553 unknown_predictions 32 accuracy: 82.87086446104588
current_samples 1875 correct_predictions 1554 unknown_predictions 32 accuracy: 82.88
Invalid Prediction for dataset_evaluate\Person12\person12129-15-60.jpg | Prediction Name - person11
current_samples 1876 correct_predictions 1554 unknown_predictions 32 accuracy: 82.83582089552239
current_samples 1877 correct_predictions 1555 unknown_predictions 32 accuracy: 82.84496537027171
Invalid Prediction for dataset_evaluate\Person12\person12131-15-30.jpg | Prediction Name - person11
current_samples 1878 correct_predictions 1555 unknown_predictions 32 accuracy: 82.80085197018104
Invalid Prediction for dataset_evaluate\Person12\person12132-15-15.jpg | Prediction Name - person11
current_samples 1879 correct_predictions 1555 unknown_predictions 32 accuracy: 82.756785524215
Invalid Prediction for dataset_evaluate\Person12\person12133-15+0.jpg | Prediction Name - person11
current_samples 1880 correct_predictions 1555 unknown_predictions 32 accuracy: 82.7127659574468
current_samples 1881 correct_predictions 1556 unknown_predictions 32 accuracy: 82.72195640616692
Invalid Prediction for dataset_evaluate\Person12\person12135-15+30.jpg | Prediction Name - person11
current_samples 1882 correct_predictions 1556 unknown_predictions 32 accuracy: 82.6780021253985
Invalid Prediction for dataset_evaluate\Person12\person12136-15+45.jpg | Prediction Name - person11
current_samples 1883 correct_predictions 1556 unknown_predictions 32 accuracy: 82.63409453000531
current_samples 1884 correct_predictions 1557 unknown_predictions 32 accuracy: 82.64331210191082
Invalid Prediction for dataset_evaluate\Person12\person12138-15+75.jpg | Prediction Name - person10
current_samples 1885 correct_predictions 1557 unknown_predictions 32 accuracy: 82.59946949602121
current_samples 1886 correct_predictions 1558 unknown_predictions 32 accuracy: 82.6086956521739
Invalid Prediction for dataset_evaluate\Person12\person12140+0-90.jpg | Prediction Name - person11
current_samples 1887 correct_predictions 1558 unknown_predictions 32 accuracy: 82.5649178590355
current_samples 1888 correct_predictions 1559 unknown_predictions 32 accuracy: 82.57415254237289
current_samples 1889 correct_predictions 1560 unknown_predictions 32 accuracy: 82.58337744838539
Invalid Prediction for dataset_evaluate\Person12\person12143+0-45.jpg | Prediction Name - person11
current_samples 1890 correct_predictions 1560 unknown_predictions 32 accuracy: 82.53968253968253
Invalid Prediction for dataset_evaluate\Person12\person12144+0-30.jpg | Prediction Name - person11
current_samples 1891 correct_predictions 1560 unknown_predictions 32 accuracy: 82.4960338445267
current_samples 1892 correct_predictions 1561 unknown_predictions 32 accuracy: 82.50528541226215
current_samples 1893 correct_predictions 1562 unknown_predictions 32 accuracy: 82.51452720549392
Invalid Prediction for dataset_evaluate\Person12\person12147+0+15.jpg | Prediction Name - person11
current_samples 1894 correct_predictions 1562 unknown_predictions 32 accuracy: 82.47096092925025
Invalid Prediction for dataset_evaluate\Person12\person12148+0+30.jpg | Prediction Name - person11
current_samples 1895 correct_predictions 1562 unknown_predictions 32 accuracy: 82.42744063324538
Invalid Prediction for dataset_evaluate\Person12\person12149+0+45.jpg | Prediction Name - person11
current_samples 1896 correct_predictions 1562 unknown_predictions 32 accuracy: 82.38396624472574
Invalid Prediction for dataset_evaluate\Person12\person12150+0+60.jpg | Prediction Name - person11
current_samples 1897 correct_predictions 1562 unknown_predictions 32 accuracy: 82.3405376910912
Invalid Prediction for dataset_evaluate\Person12\person12151+0+75.jpg | Prediction Name - person11
current_samples 1898 correct_predictions 1562 unknown_predictions 32 accuracy: 82.29715489989464
current_samples 1899 correct_predictions 1563 unknown_predictions 32 accuracy: 82.30647709320695
current_samples 1900 correct_predictions 1564 unknown_predictions 32 accuracy: 82.3157894736842
Invalid Prediction for dataset_evaluate\Person12\person12154+15-75.jpg | Prediction Name - person07
current_samples 1901 correct_predictions 1564 unknown_predictions 32 accuracy: 82.27248816412414
current_samples 1902 correct_predictions 1565 unknown_predictions 32 accuracy: 82.28180862250262
current_samples 1903 correct_predictions 1566 unknown_predictions 32 accuracy: 82.29111928533894
current_samples 1904 correct_predictions 1567 unknown_predictions 32 accuracy: 82.30042016806722
current_samples 1905 correct_predictions 1568 unknown_predictions 32 accuracy: 82.30971128608924
current_samples 1906 correct_predictions 1569 unknown_predictions 32 accuracy: 82.31899265477439
current_samples 1907 correct_predictions 1570 unknown_predictions 32 accuracy: 82.32826428945988
current_samples 1908 correct_predictions 1571 unknown_predictions 32 accuracy: 82.33752620545073
Invalid Prediction for dataset_evaluate\Person12\person12162+15+45.jpg | Prediction Name - person11
current_samples 1909 correct_predictions 1571 unknown_predictions 32 accuracy: 82.2943949711891
current_samples 1910 correct_predictions 1572 unknown_predictions 32 accuracy: 82.30366492146597
current_samples 1911 correct_predictions 1573 unknown_predictions 32 accuracy: 82.31292517006803
Invalid Prediction for dataset_evaluate\Person12\person12165+15+90.jpg | Prediction Name - person11
current_samples 1912 correct_predictions 1573 unknown_predictions 32 accuracy: 82.26987447698745
current_samples 1913 correct_predictions 1574 unknown_predictions 32 accuracy: 82.27914270778881
current_samples 1914 correct_predictions 1575 unknown_predictions 32 accuracy: 82.2884012539185
current_samples 1915 correct_predictions 1576 unknown_predictions 32 accuracy: 82.2976501305483
current_samples 1916 correct_predictions 1577 unknown_predictions 32 accuracy: 82.30688935281837
current_samples 1917 correct_predictions 1578 unknown_predictions 32 accuracy: 82.31611893583725
current_samples 1918 correct_predictions 1579 unknown_predictions 32 accuracy: 82.32533889468196
current_samples 1919 correct_predictions 1580 unknown_predictions 32 accuracy: 82.33454924439812
current_samples 1920 correct_predictions 1581 unknown_predictions 32 accuracy: 82.34375
Invalid Prediction for dataset_evaluate\Person12\person12174+30+30.jpg | Prediction Name - person11
current_samples 1921 correct_predictions 1581 unknown_predictions 32 accuracy: 82.30088495575221
current_samples 1922 correct_predictions 1582 unknown_predictions 32 accuracy: 82.31009365244537
Invalid Prediction for dataset_evaluate\Person12\person12176+30+60.jpg | Prediction Name - person11
current_samples 1923 correct_predictions 1582 unknown_predictions 32 accuracy: 82.26729069162766
current_samples 1924 correct_predictions 1583 unknown_predictions 32 accuracy: 82.27650727650727
Invalid Prediction for dataset_evaluate\Person12\person12178+30+90.jpg | Prediction Name - person05
current_samples 1925 correct_predictions 1583 unknown_predictions 32 accuracy: 82.23376623376623
Invalid Prediction for dataset_evaluate\Person12\person12183+60-30.jpg | Prediction Name - person11
current_samples 1926 correct_predictions 1583 unknown_predictions 32 accuracy: 82.19106957424714
Invalid Prediction for dataset_evaluate\Person12\person12184+60-15.jpg | Prediction Name - person11
current_samples 1927 correct_predictions 1583 unknown_predictions 32 accuracy: 82.14841722885315
current_samples 1928 correct_predictions 1584 unknown_predictions 32 accuracy: 82.15767634854771
Invalid Prediction for dataset_evaluate\Person12\person12186+60+15.jpg | Prediction Name - person09
current_samples 1929 correct_predictions 1584 unknown_predictions 32 accuracy: 82.11508553654744
Invalid Prediction for dataset_evaluate\Person12\person12190+60+75.jpg | Prediction Name - person07
current_samples 1930 correct_predictions 1584 unknown_predictions 32 accuracy: 82.07253886010363
current_samples 1931 correct_predictions 1585 unknown_predictions 32 accuracy: 82.08182288969445
Invalid Prediction for dataset_evaluate\Person12\person12200-90+0.jpg | Prediction Name - person06
current_samples 1932 correct_predictions 1585 unknown_predictions 32 accuracy: 82.03933747412007
current_samples 1933 correct_predictions 1586 unknown_predictions 32 accuracy: 82.04862907397828
current_samples 1934 correct_predictions 1587 unknown_predictions 32 accuracy: 82.05791106514995
current_samples 1935 correct_predictions 1588 unknown_predictions 32 accuracy: 82.0671834625323
current_samples 1936 correct_predictions 1589 unknown_predictions 32 accuracy: 82.07644628099173
current_samples 1937 correct_predictions 1590 unknown_predictions 32 accuracy: 82.08569953536397
Invalid Prediction for dataset_evaluate\Person12\person12206-60-15.jpg | Prediction Name - person11
current_samples 1938 correct_predictions 1590 unknown_predictions 32 accuracy: 82.04334365325077
Invalid Prediction for dataset_evaluate\Person12\person12207-60+0.jpg | Prediction Name - person11
current_samples 1939 correct_predictions 1590 unknown_predictions 32 accuracy: 82.00103145951522
current_samples 1940 correct_predictions 1591 unknown_predictions 32 accuracy: 82.01030927835052
Invalid Prediction for dataset_evaluate\Person12\person12209-60+30.jpg | Prediction Name - person08
current_samples 1941 correct_predictions 1591 unknown_predictions 32 accuracy: 81.96805770221536
Invalid Prediction for dataset_evaluate\Person12\person12210-60+45.jpg | Prediction Name - person07
current_samples 1942 correct_predictions 1591 unknown_predictions 32 accuracy: 81.92584963954685
current_samples 1943 correct_predictions 1592 unknown_predictions 32 accuracy: 81.93515182707154
Invalid Prediction for dataset_evaluate\Person12\person12212-60+75.jpg | Prediction Name - person11
current_samples 1944 correct_predictions 1592 unknown_predictions 32 accuracy: 81.89300411522635
current_samples 1945 correct_predictions 1593 unknown_predictions 32 accuracy: 81.90231362467867
current_samples 1946 correct_predictions 1594 unknown_predictions 32 accuracy: 81.91161356628982
current_samples 1947 correct_predictions 1595 unknown_predictions 32 accuracy: 81.92090395480226
current_samples 1948 correct_predictions 1596 unknown_predictions 32 accuracy: 81.93018480492813
current_samples 1949 correct_predictions 1597 unknown_predictions 32 accuracy: 81.9394561313494
current_samples 1950 correct_predictions 1598 unknown_predictions 32 accuracy: 81.94871794871796
current_samples 1951 correct_predictions 1599 unknown_predictions 32 accuracy: 81.95797027165555
current_samples 1952 correct_predictions 1600 unknown_predictions 32 accuracy: 81.9672131147541
current_samples 1953 correct_predictions 1601 unknown_predictions 32 accuracy: 81.97644649257553
current_samples 1954 correct_predictions 1602 unknown_predictions 32 accuracy: 81.985670419652
current_samples 1955 correct_predictions 1603 unknown_predictions 32 accuracy: 81.99488491048594
current_samples 1956 correct_predictions 1604 unknown_predictions 32 accuracy: 82.0040899795501
current_samples 1957 correct_predictions 1605 unknown_predictions 32 accuracy: 82.01328564128768
current_samples 1958 correct_predictions 1606 unknown_predictions 32 accuracy: 82.02247191011236
current_samples 1959 correct_predictions 1607 unknown_predictions 32 accuracy: 82.03164880040838
current_samples 1960 correct_predictions 1608 unknown_predictions 32 accuracy: 82.0408163265306
current_samples 1961 correct_predictions 1609 unknown_predictions 32 accuracy: 82.04997450280469
current_samples 1962 correct_predictions 1610 unknown_predictions 32 accuracy: 82.05912334352702
current_samples 1963 correct_predictions 1611 unknown_predictions 32 accuracy: 82.06826286296484
current_samples 1964 correct_predictions 1612 unknown_predictions 32 accuracy: 82.07739307535643
current_samples 1965 correct_predictions 1613 unknown_predictions 32 accuracy: 82.08651399491093
current_samples 1966 correct_predictions 1614 unknown_predictions 32 accuracy: 82.09562563580874
current_samples 1967 correct_predictions 1615 unknown_predictions 32 accuracy: 82.10472801220132
current_samples 1968 correct_predictions 1616 unknown_predictions 32 accuracy: 82.11382113821138
current_samples 1969 correct_predictions 1617 unknown_predictions 32 accuracy: 82.12290502793296
current_samples 1970 correct_predictions 1618 unknown_predictions 32 accuracy: 82.13197969543147
current_samples 1971 correct_predictions 1619 unknown_predictions 32 accuracy: 82.14104515474378
current_samples 1972 correct_predictions 1620 unknown_predictions 32 accuracy: 82.1501014198783
current_samples 1973 correct_predictions 1621 unknown_predictions 32 accuracy: 82.15914850481501
current_samples 1974 correct_predictions 1622 unknown_predictions 32 accuracy: 82.16818642350557
current_samples 1975 correct_predictions 1623 unknown_predictions 32 accuracy: 82.17721518987342
current_samples 1976 correct_predictions 1624 unknown_predictions 32 accuracy: 82.18623481781377
current_samples 1977 correct_predictions 1625 unknown_predictions 32 accuracy: 82.19524532119374
current_samples 1978 correct_predictions 1626 unknown_predictions 32 accuracy: 82.20424671385238
Invalid Prediction for dataset_evaluate\Person12\person12249+0+45.jpg | Prediction Name - person11
current_samples 1979 correct_predictions 1626 unknown_predictions 32 accuracy: 82.16270843860536
Invalid Prediction for dataset_evaluate\Person12\person12250+0+60.jpg | Prediction Name - person11
current_samples 1980 correct_predictions 1626 unknown_predictions 32 accuracy: 82.12121212121211
current_samples 1981 correct_predictions 1627 unknown_predictions 32 accuracy: 82.13023725391217
current_samples 1982 correct_predictions 1628 unknown_predictions 32 accuracy: 82.13925327951564
current_samples 1983 correct_predictions 1629 unknown_predictions 32 accuracy: 82.1482602118003
current_samples 1984 correct_predictions 1630 unknown_predictions 32 accuracy: 82.15725806451613
current_samples 1985 correct_predictions 1631 unknown_predictions 32 accuracy: 82.1662468513854
current_samples 1986 correct_predictions 1632 unknown_predictions 32 accuracy: 82.17522658610272
current_samples 1987 correct_predictions 1633 unknown_predictions 32 accuracy: 82.18419728233518
Invalid Prediction for dataset_evaluate\Person12\person12258+15-15.jpg | Prediction Name - person11
current_samples 1988 correct_predictions 1633 unknown_predictions 32 accuracy: 82.14285714285714
current_samples 1989 correct_predictions 1634 unknown_predictions 32 accuracy: 82.15183509301156
current_samples 1990 correct_predictions 1635 unknown_predictions 32 accuracy: 82.1608040201005
current_samples 1991 correct_predictions 1636 unknown_predictions 32 accuracy: 82.16976393771974
current_samples 1992 correct_predictions 1637 unknown_predictions 32 accuracy: 82.17871485943775
current_samples 1993 correct_predictions 1638 unknown_predictions 32 accuracy: 82.18765679879579
current_samples 1994 correct_predictions 1639 unknown_predictions 32 accuracy: 82.19658976930792
current_samples 1995 correct_predictions 1640 unknown_predictions 32 accuracy: 82.20551378446115
current_samples 1996 correct_predictions 1641 unknown_predictions 32 accuracy: 82.21442885771543
current_samples 1997 correct_predictions 1642 unknown_predictions 32 accuracy: 82.22333500250375
Invalid Prediction for dataset_evaluate\Person12\person12268+30-60.jpg | Prediction Name - person11
current_samples 1998 correct_predictions 1642 unknown_predictions 32 accuracy: 82.18218218218219
current_samples 1999 correct_predictions 1643 unknown_predictions 32 accuracy: 82.19109554777388
current_samples 2000 correct_predictions 1644 unknown_predictions 32 accuracy: 82.19999999999999
current_samples 2001 correct_predictions 1645 unknown_predictions 32 accuracy: 82.2088955522239
Invalid Prediction for dataset_evaluate\Person12\person12272+30+0.jpg | Prediction Name - person11
current_samples 2002 correct_predictions 1645 unknown_predictions 32 accuracy: 82.16783216783216
current_samples 2003 correct_predictions 1646 unknown_predictions 32 accuracy: 82.17673489765353
current_samples 2004 correct_predictions 1647 unknown_predictions 32 accuracy: 82.18562874251496
current_samples 2005 correct_predictions 1648 unknown_predictions 32 accuracy: 82.19451371571073
Invalid Prediction for dataset_evaluate\Person12\person12276+30+60.jpg | Prediction Name - person11
current_samples 2006 correct_predictions 1648 unknown_predictions 32 accuracy: 82.15353938185443
current_samples 2007 correct_predictions 1649 unknown_predictions 32 accuracy: 82.16243148978575
current_samples 2008 correct_predictions 1650 unknown_predictions 32 accuracy: 82.17131474103586
Invalid Prediction for dataset_evaluate\Person12\person12279+60-90.jpg | Prediction Name - person05
current_samples 2009 correct_predictions 1650 unknown_predictions 32 accuracy: 82.1304131408661
current_samples 2010 correct_predictions 1651 unknown_predictions 32 accuracy: 82.13930348258707
current_samples 2011 correct_predictions 1652 unknown_predictions 32 accuracy: 82.14818498259572
Invalid Prediction for dataset_evaluate\Person12\person12282+60-45.jpg | Prediction Name - person04
current_samples 2012 correct_predictions 1652 unknown_predictions 32 accuracy: 82.10735586481114
current_samples 2013 correct_predictions 1653 unknown_predictions 32 accuracy: 82.11624441132638
Invalid Prediction for dataset_evaluate\Person12\person12284+60-15.jpg | Prediction Name - person09
current_samples 2014 correct_predictions 1653 unknown_predictions 32 accuracy: 82.0754716981132
current_samples 2015 correct_predictions 1654 unknown_predictions 32 accuracy: 82.08436724565756
current_samples 2016 correct_predictions 1655 unknown_predictions 32 accuracy: 82.09325396825396
current_samples 2017 correct_predictions 1656 unknown_predictions 32 accuracy: 82.10213187902826
Invalid Prediction for dataset_evaluate\Person12\person12288+60+45.jpg | Prediction Name - person06
current_samples 2018 correct_predictions 1656 unknown_predictions 32 accuracy: 82.06144697720515
current_samples 2019 correct_predictions 1657 unknown_predictions 32 accuracy: 82.07033184744922
current_samples 2020 correct_predictions 1658 unknown_predictions 32 accuracy: 82.07920792079207
current_samples 2021 correct_predictions 1659 unknown_predictions 32 accuracy: 82.08807521029193
Invalid Prediction for dataset_evaluate\Person13\person13100-90+0.jpg | Prediction Name - person01
current_samples 2022 correct_predictions 1659 unknown_predictions 32 accuracy: 82.04747774480711
Invalid Prediction for dataset_evaluate\Person13\person13101-60-90.jpg | Prediction Name - person07
current_samples 2023 correct_predictions 1659 unknown_predictions 32 accuracy: 82.00692041522491
Invalid Prediction for dataset_evaluate\Person13\person13102-60-75.jpg | Prediction Name - person01
current_samples 2024 correct_predictions 1659 unknown_predictions 32 accuracy: 81.96640316205533
Invalid Prediction for dataset_evaluate\Person13\person13103-60-60.jpg | Prediction Name - person09
current_samples 2025 correct_predictions 1659 unknown_predictions 32 accuracy: 81.92592592592592
Invalid Prediction for dataset_evaluate\Person13\person13104-60-45.jpg | Prediction Name - person09
current_samples 2026 correct_predictions 1659 unknown_predictions 32 accuracy: 81.88548864758144
current_samples 2027 correct_predictions 1660 unknown_predictions 32 accuracy: 81.89442525900346
Invalid Prediction for dataset_evaluate\Person13\person13106-60-15.jpg | Prediction Name - person09
current_samples 2028 correct_predictions 1660 unknown_predictions 32 accuracy: 81.85404339250493
current_samples 2029 correct_predictions 1661 unknown_predictions 32 accuracy: 81.86298669295219
Invalid Prediction for dataset_evaluate\Person13\person13108-60+15.jpg | Prediction Name - person09
current_samples 2030 correct_predictions 1661 unknown_predictions 32 accuracy: 81.82266009852216
current_samples 2031 correct_predictions 1662 unknown_predictions 32 accuracy: 81.83161004431314
Invalid Prediction for dataset_evaluate\Person13\person13110-60+45.jpg | Prediction Name - person04
current_samples 2032 correct_predictions 1662 unknown_predictions 32 accuracy: 81.79133858267717
Invalid Prediction for dataset_evaluate\Person13\person13111-60+60.jpg | Prediction Name - person12
current_samples 2033 correct_predictions 1662 unknown_predictions 32 accuracy: 81.75110673880964
Invalid Prediction for dataset_evaluate\Person13\person13112-60+75.jpg | Prediction Name - person11
current_samples 2034 correct_predictions 1662 unknown_predictions 32 accuracy: 81.71091445427729
Invalid Prediction for dataset_evaluate\Person13\person13113-60+90.jpg | Prediction Name - person09
current_samples 2035 correct_predictions 1662 unknown_predictions 32 accuracy: 81.67076167076168
current_samples 2036 correct_predictions 1663 unknown_predictions 32 accuracy: 81.67976424361493
current_samples 2037 correct_predictions 1664 unknown_predictions 32 accuracy: 81.68875797741777
current_samples 2038 correct_predictions 1665 unknown_predictions 32 accuracy: 81.69774288518154
current_samples 2039 correct_predictions 1666 unknown_predictions 32 accuracy: 81.7067189798921
Invalid Prediction for dataset_evaluate\Person13\person13118-30-30.jpg | Prediction Name - person09
current_samples 2040 correct_predictions 1666 unknown_predictions 32 accuracy: 81.66666666666667
current_samples 2041 correct_predictions 1667 unknown_predictions 32 accuracy: 81.67564919157276
current_samples 2042 correct_predictions 1668 unknown_predictions 32 accuracy: 81.68462291870715
current_samples 2043 correct_predictions 1669 unknown_predictions 32 accuracy: 81.69358786098874
current_samples 2044 correct_predictions 1670 unknown_predictions 32 accuracy: 81.70254403131115
current_samples 2045 correct_predictions 1671 unknown_predictions 32 accuracy: 81.71149144254278
current_samples 2046 correct_predictions 1672 unknown_predictions 32 accuracy: 81.72043010752688
current_samples 2047 correct_predictions 1673 unknown_predictions 32 accuracy: 81.72936003908158
current_samples 2048 correct_predictions 1674 unknown_predictions 32 accuracy: 81.73828125
Invalid Prediction for dataset_evaluate\Person13\person13127-15-90.jpg | Prediction Name - person09
current_samples 2049 correct_predictions 1674 unknown_predictions 32 accuracy: 81.69838945827233
current_samples 2050 correct_predictions 1675 unknown_predictions 32 accuracy: 81.70731707317073
Invalid Prediction for dataset_evaluate\Person13\person13129-15-60.jpg | Prediction Name - person07
current_samples 2051 correct_predictions 1675 unknown_predictions 32 accuracy: 81.66747927840078
current_samples 2052 correct_predictions 1676 unknown_predictions 32 accuracy: 81.67641325536063
current_samples 2053 correct_predictions 1677 unknown_predictions 32 accuracy: 81.68533852898197
current_samples 2054 correct_predictions 1678 unknown_predictions 32 accuracy: 81.69425511197663
current_samples 2055 correct_predictions 1679 unknown_predictions 32 accuracy: 81.70316301703163
Invalid Prediction for dataset_evaluate\Person13\person13134-15+15.jpg | Prediction Name - person09
current_samples 2056 correct_predictions 1679 unknown_predictions 32 accuracy: 81.66342412451361
current_samples 2057 correct_predictions 1680 unknown_predictions 32 accuracy: 81.67233835683034
Invalid Prediction for dataset_evaluate\Person13\person13136-15+45.jpg | Prediction Name - person11
current_samples 2058 correct_predictions 1680 unknown_predictions 32 accuracy: 81.63265306122449
current_samples 2059 correct_predictions 1681 unknown_predictions 32 accuracy: 81.64157357940748
current_samples 2060 correct_predictions 1682 unknown_predictions 32 accuracy: 81.6504854368932
Invalid Prediction for dataset_evaluate\Person13\person13139-15+90.jpg | Prediction Name - person09
current_samples 2061 correct_predictions 1682 unknown_predictions 32 accuracy: 81.61086851043183
Invalid Prediction for dataset_evaluate\Person13\person13140+0-90.jpg | Prediction Name - person09
current_samples 2062 correct_predictions 1682 unknown_predictions 32 accuracy: 81.57129000969933
Invalid Prediction for dataset_evaluate\Person13\person13141+0-75.jpg | Prediction Name - person09
current_samples 2063 correct_predictions 1682 unknown_predictions 32 accuracy: 81.53174987881727
current_samples 2064 correct_predictions 1683 unknown_predictions 32 accuracy: 81.54069767441861
current_samples 2065 correct_predictions 1684 unknown_predictions 32 accuracy: 81.5496368038741
current_samples 2066 correct_predictions 1685 unknown_predictions 32 accuracy: 81.55856727976767
current_samples 2067 correct_predictions 1686 unknown_predictions 32 accuracy: 81.56748911465893
current_samples 2068 correct_predictions 1687 unknown_predictions 32 accuracy: 81.57640232108318
current_samples 2069 correct_predictions 1688 unknown_predictions 32 accuracy: 81.58530691155147
current_samples 2070 correct_predictions 1689 unknown_predictions 32 accuracy: 81.59420289855073
current_samples 2071 correct_predictions 1690 unknown_predictions 32 accuracy: 81.6030902945437
Invalid Prediction for dataset_evaluate\Person13\person13150+0+60.jpg | Prediction Name - person12
current_samples 2072 correct_predictions 1690 unknown_predictions 32 accuracy: 81.56370656370656
current_samples 2073 correct_predictions 1691 unknown_predictions 32 accuracy: 81.57260009647854
current_samples 2074 correct_predictions 1692 unknown_predictions 32 accuracy: 81.58148505303761
current_samples 2075 correct_predictions 1693 unknown_predictions 32 accuracy: 81.59036144578313
Invalid Prediction for dataset_evaluate\Person13\person13154+15-75.jpg | Prediction Name - person07
current_samples 2076 correct_predictions 1693 unknown_predictions 32 accuracy: 81.55105973025049
current_samples 2077 correct_predictions 1694 unknown_predictions 32 accuracy: 81.55994222436206
current_samples 2078 correct_predictions 1695 unknown_predictions 32 accuracy: 81.56881616939364
current_samples 2079 correct_predictions 1696 unknown_predictions 32 accuracy: 81.57768157768159
Invalid Prediction for dataset_evaluate\Person13\person13158+15-15.jpg | Prediction Name - person05
current_samples 2080 correct_predictions 1696 unknown_predictions 32 accuracy: 81.53846153846153
current_samples 2081 correct_predictions 1697 unknown_predictions 32 accuracy: 81.54733301297453
current_samples 2082 correct_predictions 1698 unknown_predictions 32 accuracy: 81.55619596541787
current_samples 2083 correct_predictions 1699 unknown_predictions 32 accuracy: 81.56505040806529
current_samples 2084 correct_predictions 1700 unknown_predictions 32 accuracy: 81.57389635316699
current_samples 2085 correct_predictions 1701 unknown_predictions 32 accuracy: 81.58273381294964
current_samples 2086 correct_predictions 1702 unknown_predictions 32 accuracy: 81.5915627996165
Invalid Prediction for dataset_evaluate\Person13\person13165+15+90.jpg | Prediction Name - person06
current_samples 2087 correct_predictions 1702 unknown_predictions 32 accuracy: 81.55246765692381
Invalid Prediction for dataset_evaluate\Person13\person13166+30-90.jpg | Prediction Name - person07
current_samples 2088 correct_predictions 1702 unknown_predictions 32 accuracy: 81.51340996168582
current_samples 2089 correct_predictions 1703 unknown_predictions 32 accuracy: 81.52225945428435
Invalid Prediction for dataset_evaluate\Person13\person13168+30-60.jpg | Prediction Name - person07
current_samples 2090 correct_predictions 1703 unknown_predictions 32 accuracy: 81.48325358851675
current_samples 2091 correct_predictions 1704 unknown_predictions 32 accuracy: 81.49210903873745
current_samples 2092 correct_predictions 1705 unknown_predictions 32 accuracy: 81.50095602294455
Invalid Prediction for dataset_evaluate\Person13\person13171+30-15.jpg | Prediction Name - person12
current_samples 2093 correct_predictions 1705 unknown_predictions 32 accuracy: 81.46201624462493
current_samples 2094 correct_predictions 1706 unknown_predictions 32 accuracy: 81.47086914995224
Invalid Prediction for dataset_evaluate\Person13\person13173+30+15.jpg | Prediction Name - person09
current_samples 2095 correct_predictions 1706 unknown_predictions 32 accuracy: 81.43198090692124
current_samples 2096 correct_predictions 1707 unknown_predictions 32 accuracy: 81.44083969465649
Invalid Prediction for dataset_evaluate\Person13\person13175+30+45.jpg | Prediction Name - person09
current_samples 2097 correct_predictions 1707 unknown_predictions 32 accuracy: 81.40200286123033
current_samples 2098 correct_predictions 1708 unknown_predictions 32 accuracy: 81.41086749285034
current_samples 2099 correct_predictions 1709 unknown_predictions 32 accuracy: 81.41972367794187
current_samples 2100 correct_predictions 1710 unknown_predictions 32 accuracy: 81.42857142857143
Invalid Prediction for dataset_evaluate\Person13\person13179+60-90.jpg | Prediction Name - person07
current_samples 2101 correct_predictions 1710 unknown_predictions 32 accuracy: 81.38981437410757
Invalid Prediction for dataset_evaluate\Person13\person13180+60-75.jpg | Prediction Name - person07
current_samples 2102 correct_predictions 1710 unknown_predictions 32 accuracy: 81.3510941960038
current_samples 2103 correct_predictions 1711 unknown_predictions 32 accuracy: 81.35996195910604
current_samples 2104 correct_predictions 1712 unknown_predictions 32 accuracy: 81.36882129277566
Invalid Prediction for dataset_evaluate\Person13\person13183+60-30.jpg | Prediction Name - person06
current_samples 2105 correct_predictions 1712 unknown_predictions 32 accuracy: 81.33016627078385
Invalid Prediction for dataset_evaluate\Person13\person13184+60-15.jpg | Prediction Name - person07
current_samples 2106 correct_predictions 1712 unknown_predictions 32 accuracy: 81.29154795821462
Invalid Prediction for dataset_evaluate\Person13\person13185+60+0.jpg | Prediction Name - person07
current_samples 2107 correct_predictions 1712 unknown_predictions 32 accuracy: 81.25296630280019
current_samples 2108 correct_predictions 1713 unknown_predictions 32 accuracy: 81.2618595825427
Invalid Prediction for dataset_evaluate\Person13\person13187+60+30.jpg | Prediction Name - person09
current_samples 2109 correct_predictions 1713 unknown_predictions 32 accuracy: 81.22332859174965
current_samples 2110 correct_predictions 1714 unknown_predictions 32 accuracy: 81.23222748815165
current_samples 2111 correct_predictions 1715 unknown_predictions 32 accuracy: 81.2411179535765
current_samples 2112 correct_predictions 1716 unknown_predictions 32 accuracy: 81.25
Invalid Prediction for dataset_evaluate\Person13\person13191+60+90.jpg | Prediction Name - person07
current_samples 2113 correct_predictions 1716 unknown_predictions 32 accuracy: 81.21154756270705
current_samples 2114 correct_predictions 1717 unknown_predictions 32 accuracy: 81.22043519394512
current_samples 2115 correct_predictions 1718 unknown_predictions 32 accuracy: 81.22931442080377
Invalid Prediction for dataset_evaluate\Person13\person13202-60-75.jpg | Prediction Name - person09
current_samples 2116 correct_predictions 1718 unknown_predictions 32 accuracy: 81.19092627599244
current_samples 2117 correct_predictions 1719 unknown_predictions 32 accuracy: 81.19981105337743
current_samples 2118 correct_predictions 1720 unknown_predictions 32 accuracy: 81.20868744098206
current_samples 2119 correct_predictions 1721 unknown_predictions 32 accuracy: 81.21755545068429
current_samples 2120 correct_predictions 1722 unknown_predictions 32 accuracy: 81.22641509433961
current_samples 2121 correct_predictions 1723 unknown_predictions 32 accuracy: 81.23526638378124
current_samples 2122 correct_predictions 1724 unknown_predictions 32 accuracy: 81.24410933081998
current_samples 2123 correct_predictions 1725 unknown_predictions 32 accuracy: 81.25294394724446
current_samples 2124 correct_predictions 1726 unknown_predictions 32 accuracy: 81.2617702448211
current_samples 2125 correct_predictions 1727 unknown_predictions 32 accuracy: 81.27058823529411
current_samples 2126 correct_predictions 1728 unknown_predictions 32 accuracy: 81.2793979303857
current_samples 2127 correct_predictions 1729 unknown_predictions 32 accuracy: 81.28819934179596
current_samples 2128 correct_predictions 1730 unknown_predictions 32 accuracy: 81.296992481203
current_samples 2129 correct_predictions 1731 unknown_predictions 32 accuracy: 81.30577736026304
current_samples 2130 correct_predictions 1732 unknown_predictions 32 accuracy: 81.31455399061032
current_samples 2131 correct_predictions 1733 unknown_predictions 32 accuracy: 81.32332238385735
current_samples 2132 correct_predictions 1734 unknown_predictions 32 accuracy: 81.33208255159474
current_samples 2133 correct_predictions 1735 unknown_predictions 32 accuracy: 81.34083450539147
Invalid Prediction for dataset_evaluate\Person13\person13220-30+0.jpg | Prediction Name - person09
current_samples 2134 correct_predictions 1735 unknown_predictions 32 accuracy: 81.30271790065603
current_samples 2135 correct_predictions 1736 unknown_predictions 32 accuracy: 81.31147540983606
current_samples 2136 correct_predictions 1737 unknown_predictions 32 accuracy: 81.32022471910112
current_samples 2137 correct_predictions 1738 unknown_predictions 32 accuracy: 81.32896583996256
current_samples 2138 correct_predictions 1739 unknown_predictions 32 accuracy: 81.3376987839102
Invalid Prediction for dataset_evaluate\Person13\person13225-30+75.jpg | Prediction Name - person09
current_samples 2139 correct_predictions 1739 unknown_predictions 32 accuracy: 81.29967274427302
current_samples 2140 correct_predictions 1740 unknown_predictions 32 accuracy: 81.30841121495327
current_samples 2141 correct_predictions 1741 unknown_predictions 32 accuracy: 81.31714152265297
Invalid Prediction for dataset_evaluate\Person13\person13228-15-75.jpg | Prediction Name - person09
current_samples 2142 correct_predictions 1741 unknown_predictions 32 accuracy: 81.27917833800187
current_samples 2143 correct_predictions 1742 unknown_predictions 32 accuracy: 81.28791413905739
current_samples 2144 correct_predictions 1743 unknown_predictions 32 accuracy: 81.29664179104478
current_samples 2145 correct_predictions 1744 unknown_predictions 32 accuracy: 81.3053613053613
current_samples 2146 correct_predictions 1745 unknown_predictions 32 accuracy: 81.31407269338304
current_samples 2147 correct_predictions 1746 unknown_predictions 32 accuracy: 81.32277596646483
current_samples 2148 correct_predictions 1747 unknown_predictions 32 accuracy: 81.33147113594042
current_samples 2149 correct_predictions 1748 unknown_predictions 32 accuracy: 81.34015821312238
current_samples 2150 correct_predictions 1749 unknown_predictions 32 accuracy: 81.34883720930233
current_samples 2151 correct_predictions 1750 unknown_predictions 32 accuracy: 81.3575081357508
current_samples 2152 correct_predictions 1751 unknown_predictions 32 accuracy: 81.36617100371747
current_samples 2153 correct_predictions 1752 unknown_predictions 32 accuracy: 81.37482582443103
current_samples 2154 correct_predictions 1753 unknown_predictions 32 accuracy: 81.38347260909936
current_samples 2155 correct_predictions 1754 unknown_predictions 32 accuracy: 81.39211136890951
current_samples 2156 correct_predictions 1755 unknown_predictions 32 accuracy: 81.40074211502782
current_samples 2157 correct_predictions 1756 unknown_predictions 32 accuracy: 81.40936485859991
current_samples 2158 correct_predictions 1757 unknown_predictions 32 accuracy: 81.41797961075069
current_samples 2159 correct_predictions 1758 unknown_predictions 32 accuracy: 81.42658638258453
current_samples 2160 correct_predictions 1759 unknown_predictions 32 accuracy: 81.43518518518519
current_samples 2161 correct_predictions 1760 unknown_predictions 32 accuracy: 81.44377602961592
current_samples 2162 correct_predictions 1761 unknown_predictions 32 accuracy: 81.45235892691952
current_samples 2163 correct_predictions 1762 unknown_predictions 32 accuracy: 81.46093388811836
current_samples 2164 correct_predictions 1763 unknown_predictions 32 accuracy: 81.46950092421442
current_samples 2165 correct_predictions 1764 unknown_predictions 32 accuracy: 81.47806004618937
current_samples 2166 correct_predictions 1765 unknown_predictions 32 accuracy: 81.48661126500461
current_samples 2167 correct_predictions 1766 unknown_predictions 32 accuracy: 81.49515459160129
current_samples 2168 correct_predictions 1767 unknown_predictions 32 accuracy: 81.50369003690037
current_samples 2169 correct_predictions 1768 unknown_predictions 32 accuracy: 81.51221761180267
current_samples 2170 correct_predictions 1769 unknown_predictions 32 accuracy: 81.52073732718894
current_samples 2171 correct_predictions 1770 unknown_predictions 32 accuracy: 81.52924919391985
current_samples 2172 correct_predictions 1771 unknown_predictions 32 accuracy: 81.5377532228361
current_samples 2173 correct_predictions 1772 unknown_predictions 32 accuracy: 81.5462494247584
current_samples 2174 correct_predictions 1773 unknown_predictions 32 accuracy: 81.55473781048758
current_samples 2175 correct_predictions 1774 unknown_predictions 32 accuracy: 81.5632183908046
current_samples 2176 correct_predictions 1775 unknown_predictions 32 accuracy: 81.57169117647058
current_samples 2177 correct_predictions 1776 unknown_predictions 32 accuracy: 81.58015617822691
current_samples 2178 correct_predictions 1777 unknown_predictions 32 accuracy: 81.58861340679523
current_samples 2179 correct_predictions 1778 unknown_predictions 32 accuracy: 81.59706287287747
current_samples 2180 correct_predictions 1779 unknown_predictions 32 accuracy: 81.60550458715596
current_samples 2181 correct_predictions 1780 unknown_predictions 32 accuracy: 81.61393856029345
current_samples 2182 correct_predictions 1781 unknown_predictions 32 accuracy: 81.62236480293309
current_samples 2183 correct_predictions 1782 unknown_predictions 32 accuracy: 81.63078332569857
current_samples 2184 correct_predictions 1783 unknown_predictions 32 accuracy: 81.63919413919413
current_samples 2185 correct_predictions 1784 unknown_predictions 32 accuracy: 81.64759725400458
current_samples 2186 correct_predictions 1785 unknown_predictions 32 accuracy: 81.65599268069533
current_samples 2187 correct_predictions 1786 unknown_predictions 32 accuracy: 81.66438042981254
current_samples 2188 correct_predictions 1787 unknown_predictions 32 accuracy: 81.672760511883
current_samples 2189 correct_predictions 1788 unknown_predictions 32 accuracy: 81.68113293741435
current_samples 2190 correct_predictions 1789 unknown_predictions 32 accuracy: 81.68949771689498
Invalid Prediction for dataset_evaluate\Person13\person13277+30+75.jpg | Prediction Name - person05
current_samples 2191 correct_predictions 1789 unknown_predictions 32 accuracy: 81.6522136010954
current_samples 2192 correct_predictions 1790 unknown_predictions 32 accuracy: 81.66058394160584
current_samples 2193 correct_predictions 1791 unknown_predictions 32 accuracy: 81.66894664842681
current_samples 2194 correct_predictions 1792 unknown_predictions 32 accuracy: 81.67730173199635
current_samples 2195 correct_predictions 1793 unknown_predictions 32 accuracy: 81.68564920273349
current_samples 2196 correct_predictions 1794 unknown_predictions 32 accuracy: 81.69398907103826
current_samples 2197 correct_predictions 1795 unknown_predictions 32 accuracy: 81.70232134729176
current_samples 2198 correct_predictions 1796 unknown_predictions 32 accuracy: 81.71064604185622
current_samples 2199 correct_predictions 1797 unknown_predictions 32 accuracy: 81.71896316507502
current_samples 2200 correct_predictions 1798 unknown_predictions 32 accuracy: 81.72727272727272
current_samples 2201 correct_predictions 1799 unknown_predictions 32 accuracy: 81.73557473875512
current_samples 2202 correct_predictions 1800 unknown_predictions 32 accuracy: 81.74386920980926
Invalid Prediction for dataset_evaluate\Person13\person13289+60+60.jpg | Prediction Name - person07
current_samples 2203 correct_predictions 1800 unknown_predictions 32 accuracy: 81.70676350431229
current_samples 2204 correct_predictions 1801 unknown_predictions 32 accuracy: 81.71506352087114
current_samples 2205 correct_predictions 1802 unknown_predictions 32 accuracy: 81.72335600907029
Invalid Prediction for dataset_evaluate\Person14\person14101-60-90.jpg | Prediction Name - person10
current_samples 2206 correct_predictions 1802 unknown_predictions 32 accuracy: 81.68631006346328
current_samples 2207 correct_predictions 1803 unknown_predictions 32 accuracy: 81.69460806524694
current_samples 2208 correct_predictions 1804 unknown_predictions 32 accuracy: 81.70289855072464
Invalid Prediction for dataset_evaluate\Person14\person14104-60-45.jpg | Prediction Name - person05
current_samples 2209 correct_predictions 1804 unknown_predictions 32 accuracy: 81.66591217745585
current_samples 2210 correct_predictions 1805 unknown_predictions 32 accuracy: 81.67420814479638
Invalid Prediction for dataset_evaluate\Person14\person14106-60-15.jpg | Prediction Name - person13
current_samples 2211 correct_predictions 1805 unknown_predictions 32 accuracy: 81.63726820443237
Invalid Prediction for dataset_evaluate\Person14\person14107-60+0.jpg | Prediction Name - person13
current_samples 2212 correct_predictions 1805 unknown_predictions 32 accuracy: 81.6003616636528
Invalid Prediction for dataset_evaluate\Person14\person14108-60+15.jpg | Prediction Name - person05
current_samples 2213 correct_predictions 1805 unknown_predictions 32 accuracy: 81.5634884771803
Invalid Prediction for dataset_evaluate\Person14\person14109-60+30.jpg | Prediction Name - person10
current_samples 2214 correct_predictions 1805 unknown_predictions 32 accuracy: 81.52664859981932
Invalid Prediction for dataset_evaluate\Person14\person14110-60+45.jpg | Prediction Name - person10
current_samples 2215 correct_predictions 1805 unknown_predictions 32 accuracy: 81.48984198645599
Invalid Prediction for dataset_evaluate\Person14\person14111-60+60.jpg | Prediction Name - person10
current_samples 2216 correct_predictions 1805 unknown_predictions 32 accuracy: 81.45306859205776
Invalid Prediction for dataset_evaluate\Person14\person14112-60+75.jpg | Prediction Name - person06
current_samples 2217 correct_predictions 1805 unknown_predictions 32 accuracy: 81.41632837167343
Invalid Prediction for dataset_evaluate\Person14\person14113-60+90.jpg | Prediction Name - person09
current_samples 2218 correct_predictions 1805 unknown_predictions 32 accuracy: 81.37962128043283
Invalid Prediction for dataset_evaluate\Person14\person14114-30-90.jpg | Prediction Name - person07
current_samples 2219 correct_predictions 1805 unknown_predictions 32 accuracy: 81.34294727354664
current_samples 2220 correct_predictions 1806 unknown_predictions 32 accuracy: 81.35135135135135
Invalid Prediction for dataset_evaluate\Person14\person14116-30-60.jpg | Prediction Name - person09
current_samples 2221 correct_predictions 1806 unknown_predictions 32 accuracy: 81.31472309770373
current_samples 2222 correct_predictions 1807 unknown_predictions 32 accuracy: 81.32313231323133
current_samples 2223 correct_predictions 1808 unknown_predictions 32 accuracy: 81.33153396311292
Invalid Prediction for dataset_evaluate\Person14\person14119-30-15.jpg | Prediction Name - person07
current_samples 2224 correct_predictions 1808 unknown_predictions 32 accuracy: 81.29496402877699
current_samples 2225 correct_predictions 1809 unknown_predictions 32 accuracy: 81.30337078651685
Invalid Prediction for dataset_evaluate\Person14\person14121-30+15.jpg | Prediction Name - person09
current_samples 2226 correct_predictions 1809 unknown_predictions 32 accuracy: 81.26684636118598
current_samples 2227 correct_predictions 1810 unknown_predictions 32 accuracy: 81.275258194881
Invalid Prediction for dataset_evaluate\Person14\person14123-30+45.jpg | Prediction Name - person09
current_samples 2228 correct_predictions 1810 unknown_predictions 32 accuracy: 81.23877917414721
current_samples 2229 correct_predictions 1811 unknown_predictions 32 accuracy: 81.24719605204128
Invalid Prediction for dataset_evaluate\Person14\person14125-30+75.jpg | Prediction Name - person06
current_samples 2230 correct_predictions 1811 unknown_predictions 32 accuracy: 81.21076233183857
current_samples 2231 correct_predictions 1812 unknown_predictions 32 accuracy: 81.21918422232183
Invalid Prediction for dataset_evaluate\Person14\person14127-15-90.jpg | Prediction Name - person09
current_samples 2232 correct_predictions 1812 unknown_predictions 32 accuracy: 81.18279569892472
Invalid Prediction for dataset_evaluate\Person14\person14128-15-75.jpg | Prediction Name - person10
current_samples 2233 correct_predictions 1812 unknown_predictions 32 accuracy: 81.14643976712942
current_samples 2234 correct_predictions 1813 unknown_predictions 32 accuracy: 81.15487914055505
Invalid Prediction for dataset_evaluate\Person14\person14130-15-45.jpg | Prediction Name - person07
current_samples 2235 correct_predictions 1813 unknown_predictions 32 accuracy: 81.1185682326622
current_samples 2236 correct_predictions 1814 unknown_predictions 32 accuracy: 81.12701252236137
current_samples 2237 correct_predictions 1815 unknown_predictions 32 accuracy: 81.135449262405
current_samples 2238 correct_predictions 1816 unknown_predictions 32 accuracy: 81.1438784629133
current_samples 2239 correct_predictions 1817 unknown_predictions 32 accuracy: 81.15230013398839
Invalid Prediction for dataset_evaluate\Person14\person14135-15+30.jpg | Prediction Name - person07
current_samples 2240 correct_predictions 1817 unknown_predictions 32 accuracy: 81.11607142857142
current_samples 2241 correct_predictions 1818 unknown_predictions 32 accuracy: 81.12449799196787
Invalid Prediction for dataset_evaluate\Person14\person14137-15+60.jpg | Prediction Name - person09
current_samples 2242 correct_predictions 1818 unknown_predictions 32 accuracy: 81.08831400535237
current_samples 2243 correct_predictions 1819 unknown_predictions 32 accuracy: 81.09674543022737
Invalid Prediction for dataset_evaluate\Person14\person14139-15+90.jpg | Prediction Name - person10
current_samples 2244 correct_predictions 1819 unknown_predictions 32 accuracy: 81.06060606060606
current_samples 2245 correct_predictions 1820 unknown_predictions 32 accuracy: 81.06904231625836
current_samples 2246 correct_predictions 1821 unknown_predictions 32 accuracy: 81.07747105966162
current_samples 2247 correct_predictions 1822 unknown_predictions 32 accuracy: 81.08589230084557
current_samples 2248 correct_predictions 1823 unknown_predictions 32 accuracy: 81.09430604982207
current_samples 2249 correct_predictions 1824 unknown_predictions 32 accuracy: 81.10271231658514
current_samples 2250 correct_predictions 1825 unknown_predictions 32 accuracy: 81.11111111111111
current_samples 2251 correct_predictions 1826 unknown_predictions 32 accuracy: 81.1195024433585
current_samples 2252 correct_predictions 1827 unknown_predictions 32 accuracy: 81.1278863232682
current_samples 2253 correct_predictions 1828 unknown_predictions 32 accuracy: 81.13626276076343
current_samples 2254 correct_predictions 1829 unknown_predictions 32 accuracy: 81.14463176574978
current_samples 2255 correct_predictions 1830 unknown_predictions 32 accuracy: 81.1529933481153
current_samples 2256 correct_predictions 1831 unknown_predictions 32 accuracy: 81.16134751773049
Invalid Prediction for dataset_evaluate\Person14\person14152+0+90.jpg | Prediction Name - person09
current_samples 2257 correct_predictions 1831 unknown_predictions 32 accuracy: 81.12538768276472
Invalid Prediction for dataset_evaluate\Person14\person14153+15-90.jpg | Prediction Name - person09
current_samples 2258 correct_predictions 1831 unknown_predictions 32 accuracy: 81.08945969884854
current_samples 2259 correct_predictions 1832 unknown_predictions 32 accuracy: 81.0978308986277
Invalid Prediction for dataset_evaluate\Person14\person14155+15-60.jpg | Prediction Name - person13
current_samples 2260 correct_predictions 1832 unknown_predictions 32 accuracy: 81.06194690265487
current_samples 2261 correct_predictions 1833 unknown_predictions 32 accuracy: 81.0703228659885
current_samples 2262 correct_predictions 1834 unknown_predictions 32 accuracy: 81.07869142351902
current_samples 2263 correct_predictions 1835 unknown_predictions 32 accuracy: 81.08705258506407
current_samples 2264 correct_predictions 1836 unknown_predictions 32 accuracy: 81.09540636042402
Invalid Prediction for dataset_evaluate\Person14\person14160+15+15.jpg | Prediction Name - person13
current_samples 2265 correct_predictions 1836 unknown_predictions 32 accuracy: 81.05960264900662
current_samples 2266 correct_predictions 1837 unknown_predictions 32 accuracy: 81.06796116504854
current_samples 2267 correct_predictions 1838 unknown_predictions 32 accuracy: 81.07631230701368
current_samples 2268 correct_predictions 1839 unknown_predictions 32 accuracy: 81.08465608465607
current_samples 2269 correct_predictions 1840 unknown_predictions 32 accuracy: 81.09299250771265
current_samples 2270 correct_predictions 1841 unknown_predictions 32 accuracy: 81.10132158590308
Invalid Prediction for dataset_evaluate\Person14\person14166+30-90.jpg | Prediction Name - person07
current_samples 2271 correct_predictions 1841 unknown_predictions 32 accuracy: 81.06560986349626
Invalid Prediction for dataset_evaluate\Person14\person14167+30-75.jpg | Prediction Name - person13
current_samples 2272 correct_predictions 1841 unknown_predictions 32 accuracy: 81.02992957746478
current_samples 2273 correct_predictions 1842 unknown_predictions 32 accuracy: 81.03827540695117
Invalid Prediction for dataset_evaluate\Person14\person14169+30-45.jpg | Prediction Name - person13
current_samples 2274 correct_predictions 1842 unknown_predictions 32 accuracy: 81.00263852242745
current_samples 2275 correct_predictions 1843 unknown_predictions 32 accuracy: 81.01098901098901
current_samples 2276 correct_predictions 1844 unknown_predictions 32 accuracy: 81.01933216168717
current_samples 2277 correct_predictions 1845 unknown_predictions 32 accuracy: 81.02766798418972
current_samples 2278 correct_predictions 1846 unknown_predictions 32 accuracy: 81.0359964881475
Invalid Prediction for dataset_evaluate\Person14\person14174+30+30.jpg | Prediction Name - person06
current_samples 2279 correct_predictions 1846 unknown_predictions 32 accuracy: 81.00043878894252
current_samples 2280 correct_predictions 1847 unknown_predictions 32 accuracy: 81.00877192982456
Invalid Prediction for dataset_evaluate\Person14\person14176+30+60.jpg | Prediction Name - person13
current_samples 2281 correct_predictions 1847 unknown_predictions 32 accuracy: 80.9732573432705
current_samples 2282 correct_predictions 1848 unknown_predictions 32 accuracy: 80.98159509202453
Invalid Prediction for dataset_evaluate\Person14\person14178+30+90.jpg | Prediction Name - person12
current_samples 2283 correct_predictions 1848 unknown_predictions 32 accuracy: 80.946123521682
Invalid Prediction for dataset_evaluate\Person14\person14179+60-90.jpg | Prediction Name - person05
current_samples 2284 correct_predictions 1848 unknown_predictions 32 accuracy: 80.9106830122592
Invalid Prediction for dataset_evaluate\Person14\person14180+60-75.jpg | Prediction Name - person07
current_samples 2285 correct_predictions 1848 unknown_predictions 32 accuracy: 80.87527352297593
Invalid Prediction for dataset_evaluate\Person14\person14181+60-60.jpg | Prediction Name - person07
current_samples 2286 correct_predictions 1848 unknown_predictions 32 accuracy: 80.83989501312337
Invalid Prediction for dataset_evaluate\Person14\person14182+60-45.jpg | Prediction Name - person13
current_samples 2287 correct_predictions 1848 unknown_predictions 32 accuracy: 80.80454744206384
current_samples 2288 correct_predictions 1849 unknown_predictions 32 accuracy: 80.81293706293707
Invalid Prediction for dataset_evaluate\Person14\person14184+60-15.jpg | Prediction Name - person05
current_samples 2289 correct_predictions 1849 unknown_predictions 32 accuracy: 80.77763215377894
Invalid Prediction for dataset_evaluate\Person14\person14185+60+0.jpg | Prediction Name - person13
current_samples 2290 correct_predictions 1849 unknown_predictions 32 accuracy: 80.74235807860262
Invalid Prediction for dataset_evaluate\Person14\person14186+60+15.jpg | Prediction Name - person13
current_samples 2291 correct_predictions 1849 unknown_predictions 32 accuracy: 80.70711479703186
current_samples 2292 correct_predictions 1850 unknown_predictions 32 accuracy: 80.7155322862129
current_samples 2293 correct_predictions 1851 unknown_predictions 32 accuracy: 80.72394243349325
current_samples 2294 correct_predictions 1852 unknown_predictions 32 accuracy: 80.73234524847427
current_samples 2295 correct_predictions 1853 unknown_predictions 32 accuracy: 80.74074074074075
current_samples 2296 correct_predictions 1854 unknown_predictions 32 accuracy: 80.74912891986062
Invalid Prediction for dataset_evaluate\Person14\person14192+90+0.jpg | Prediction Name - person07
current_samples 2297 correct_predictions 1854 unknown_predictions 32 accuracy: 80.71397474967348
current_samples 2298 correct_predictions 1855 unknown_predictions 32 accuracy: 80.72236727589208
Invalid Prediction for dataset_evaluate\Person14\person14201-60-90.jpg | Prediction Name - person13
current_samples 2299 correct_predictions 1855 unknown_predictions 32 accuracy: 80.68725532840365
current_samples 2300 correct_predictions 1856 unknown_predictions 32 accuracy: 80.69565217391305
Invalid Prediction for dataset_evaluate\Person14\person14204-60-45.jpg | Prediction Name - person09
current_samples 2301 correct_predictions 1856 unknown_predictions 32 accuracy: 80.66058235549761
Invalid Prediction for dataset_evaluate\Person14\person14206-60-15.jpg | Prediction Name - person05
current_samples 2302 correct_predictions 1856 unknown_predictions 32 accuracy: 80.62554300608167
Invalid Prediction for dataset_evaluate\Person14\person14207-60+0.jpg | Prediction Name - person09
current_samples 2303 correct_predictions 1856 unknown_predictions 32 accuracy: 80.59053408597482
current_samples 2304 correct_predictions 1857 unknown_predictions 32 accuracy: 80.59895833333334
Invalid Prediction for dataset_evaluate\Person14\person14209-60+30.jpg | Prediction Name - person12
current_samples 2305 correct_predictions 1857 unknown_predictions 32 accuracy: 80.56399132321042
Invalid Prediction for dataset_evaluate\Person14\person14214-30-90.jpg | Prediction Name - person01
current_samples 2306 correct_predictions 1857 unknown_predictions 32 accuracy: 80.52905464006939
Invalid Prediction for dataset_evaluate\Person14\person14215-30-75.jpg | Prediction Name - person10
current_samples 2307 correct_predictions 1857 unknown_predictions 32 accuracy: 80.49414824447334
Invalid Prediction for dataset_evaluate\Person14\person14216-30-60.jpg | Prediction Name - person10
current_samples 2308 correct_predictions 1857 unknown_predictions 32 accuracy: 80.45927209705373
current_samples 2309 correct_predictions 1858 unknown_predictions 32 accuracy: 80.4677349501949
current_samples 2310 correct_predictions 1859 unknown_predictions 32 accuracy: 80.47619047619048
Invalid Prediction for dataset_evaluate\Person14\person14219-30-15.jpg | Prediction Name - person05
current_samples 2311 correct_predictions 1859 unknown_predictions 32 accuracy: 80.44136737343142
current_samples 2312 correct_predictions 1860 unknown_predictions 32 accuracy: 80.44982698961938
Invalid Prediction for dataset_evaluate\Person14\person14221-30+15.jpg | Prediction Name - person01
current_samples 2313 correct_predictions 1860 unknown_predictions 32 accuracy: 80.41504539559014
Invalid Prediction for dataset_evaluate\Person14\person14222-30+30.jpg | Prediction Name - person07
current_samples 2314 correct_predictions 1860 unknown_predictions 32 accuracy: 80.38029386343993
current_samples 2315 correct_predictions 1861 unknown_predictions 32 accuracy: 80.38876889848811
current_samples 2316 correct_predictions 1862 unknown_predictions 32 accuracy: 80.3972366148532
current_samples 2317 correct_predictions 1863 unknown_predictions 32 accuracy: 80.40569702201122
current_samples 2318 correct_predictions 1864 unknown_predictions 32 accuracy: 80.41415012942191
current_samples 2319 correct_predictions 1865 unknown_predictions 32 accuracy: 80.42259594652867
current_samples 2320 correct_predictions 1866 unknown_predictions 32 accuracy: 80.43103448275862
current_samples 2321 correct_predictions 1867 unknown_predictions 32 accuracy: 80.43946574752262
current_samples 2322 correct_predictions 1868 unknown_predictions 32 accuracy: 80.44788975021532
Invalid Prediction for dataset_evaluate\Person14\person14235-15+30.jpg | Prediction Name - person07
current_samples 2323 correct_predictions 1868 unknown_predictions 32 accuracy: 80.41325871717606
current_samples 2324 correct_predictions 1869 unknown_predictions 32 accuracy: 80.42168674698796
Invalid Prediction for dataset_evaluate\Person14\person14237-15+60.jpg | Prediction Name - person09
current_samples 2325 correct_predictions 1869 unknown_predictions 32 accuracy: 80.38709677419355
Invalid Prediction for dataset_evaluate\Person14\person14240+0-90.jpg | Prediction Name - person09
current_samples 2326 correct_predictions 1869 unknown_predictions 32 accuracy: 80.35253654342218
Invalid Prediction for dataset_evaluate\Person14\person14241+0-75.jpg | Prediction Name - person13
current_samples 2327 correct_predictions 1869 unknown_predictions 32 accuracy: 80.31800601633003
Invalid Prediction for dataset_evaluate\Person14\person14242+0-60.jpg | Prediction Name - person13
current_samples 2328 correct_predictions 1869 unknown_predictions 32 accuracy: 80.28350515463917
current_samples 2329 correct_predictions 1870 unknown_predictions 32 accuracy: 80.2919708029197
current_samples 2330 correct_predictions 1871 unknown_predictions 32 accuracy: 80.30042918454936
Invalid Prediction for dataset_evaluate\Person14\person14245+0-15.jpg | Prediction Name - person09
current_samples 2331 correct_predictions 1871 unknown_predictions 32 accuracy: 80.26598026598026
current_samples 2332 correct_predictions 1872 unknown_predictions 32 accuracy: 80.27444253859348
current_samples 2333 correct_predictions 1873 unknown_predictions 32 accuracy: 80.28289755679383
current_samples 2334 correct_predictions 1874 unknown_predictions 32 accuracy: 80.29134532990574
current_samples 2335 correct_predictions 1875 unknown_predictions 32 accuracy: 80.29978586723769
Invalid Prediction for dataset_evaluate\Person14\person14250+0+60.jpg | Prediction Name - person05
current_samples 2336 correct_predictions 1875 unknown_predictions 32 accuracy: 80.2654109589041
current_samples 2337 correct_predictions 1876 unknown_predictions 32 accuracy: 80.27385537013265
current_samples 2338 correct_predictions 1877 unknown_predictions 32 accuracy: 80.28229255774167
current_samples 2339 correct_predictions 1878 unknown_predictions 32 accuracy: 80.29072253099615
current_samples 2340 correct_predictions 1879 unknown_predictions 32 accuracy: 80.29914529914531
current_samples 2341 correct_predictions 1880 unknown_predictions 32 accuracy: 80.30756087142247
current_samples 2342 correct_predictions 1881 unknown_predictions 32 accuracy: 80.31596925704527
current_samples 2343 correct_predictions 1882 unknown_predictions 32 accuracy: 80.32437046521554
current_samples 2344 correct_predictions 1883 unknown_predictions 32 accuracy: 80.33276450511946
current_samples 2345 correct_predictions 1884 unknown_predictions 32 accuracy: 80.3411513859275
Invalid Prediction for dataset_evaluate\Person14\person14260+15+15.jpg | Prediction Name - person13
current_samples 2346 correct_predictions 1884 unknown_predictions 32 accuracy: 80.30690537084399
current_samples 2347 correct_predictions 1885 unknown_predictions 32 accuracy: 80.31529612270984
current_samples 2348 correct_predictions 1886 unknown_predictions 32 accuracy: 80.3236797274276
current_samples 2349 correct_predictions 1887 unknown_predictions 32 accuracy: 80.33205619412516
Invalid Prediction for dataset_evaluate\Person14\person14264+15+75.jpg | Prediction Name - person04
current_samples 2350 correct_predictions 1887 unknown_predictions 32 accuracy: 80.29787234042554
current_samples 2351 correct_predictions 1888 unknown_predictions 32 accuracy: 80.30625265844321
Invalid Prediction for dataset_evaluate\Person14\person14266+30-90.jpg | Prediction Name - person05
current_samples 2352 correct_predictions 1888 unknown_predictions 32 accuracy: 80.27210884353741
current_samples 2353 correct_predictions 1889 unknown_predictions 32 accuracy: 80.28049298767532
current_samples 2354 correct_predictions 1890 unknown_predictions 32 accuracy: 80.28887000849618
current_samples 2355 correct_predictions 1891 unknown_predictions 32 accuracy: 80.29723991507431
current_samples 2356 correct_predictions 1892 unknown_predictions 32 accuracy: 80.3056027164686
current_samples 2357 correct_predictions 1893 unknown_predictions 32 accuracy: 80.31395842172253
Invalid Prediction for dataset_evaluate\Person14\person14272+30+0.jpg | Prediction Name - person05
current_samples 2358 correct_predictions 1893 unknown_predictions 32 accuracy: 80.27989821882952
current_samples 2359 correct_predictions 1894 unknown_predictions 32 accuracy: 80.28825773632894
current_samples 2360 correct_predictions 1895 unknown_predictions 32 accuracy: 80.29661016949152
Invalid Prediction for dataset_evaluate\Person14\person14275+30+45.jpg | Prediction Name - person12
current_samples 2361 correct_predictions 1895 unknown_predictions 32 accuracy: 80.26260059296908
current_samples 2362 correct_predictions 1896 unknown_predictions 32 accuracy: 80.27095681625741
Invalid Prediction for dataset_evaluate\Person14\person14277+30+75.jpg | Prediction Name - person13
current_samples 2363 correct_predictions 1896 unknown_predictions 32 accuracy: 80.23698688108337
current_samples 2364 correct_predictions 1897 unknown_predictions 32 accuracy: 80.24534686971235
current_samples 2365 correct_predictions 1898 unknown_predictions 32 accuracy: 80.2536997885835
Invalid Prediction for dataset_evaluate\Person14\person14282+60-45.jpg | Prediction Name - person13
current_samples 2366 correct_predictions 1898 unknown_predictions 32 accuracy: 80.21978021978022
current_samples 2367 correct_predictions 1899 unknown_predictions 32 accuracy: 80.22813688212928
Invalid Prediction for dataset_evaluate\Person14\person14284+60-15.jpg | Prediction Name - person09
current_samples 2368 correct_predictions 1899 unknown_predictions 32 accuracy: 80.19425675675676
current_samples 2369 correct_predictions 1900 unknown_predictions 32 accuracy: 80.20261713803293
Invalid Prediction for dataset_evaluate\Person14\person14286+60+15.jpg | Prediction Name - person05
current_samples 2370 correct_predictions 1900 unknown_predictions 32 accuracy: 80.16877637130801
current_samples 2371 correct_predictions 1901 unknown_predictions 32 accuracy: 80.17714044706875
current_samples 2372 correct_predictions 1902 unknown_predictions 32 accuracy: 80.18549747048904
current_samples 2373 correct_predictions 1903 unknown_predictions 32 accuracy: 80.19384745048463
current_samples 2374 correct_predictions 1904 unknown_predictions 32 accuracy: 80.2021903959562
Invalid Prediction for dataset_evaluate\Person14\person14291+60+90.jpg | Prediction Name - person02
current_samples 2375 correct_predictions 1904 unknown_predictions 32 accuracy: 80.16842105263157
Invalid Prediction for dataset_evaluate\Person15\person15100-90+0.jpg | Prediction Name - person09
current_samples 2376 correct_predictions 1904 unknown_predictions 32 accuracy: 80.13468013468014
Invalid Prediction for dataset_evaluate\Person15\person15101-60-90.jpg | Prediction Name - person10
current_samples 2377 correct_predictions 1904 unknown_predictions 32 accuracy: 80.10096760622633
current_samples 2378 correct_predictions 1905 unknown_predictions 32 accuracy: 80.10933557611438
current_samples 2379 correct_predictions 1906 unknown_predictions 32 accuracy: 80.11769651113913
Invalid Prediction for dataset_evaluate\Person15\person15104-60-45.jpg | Prediction Name - person05
current_samples 2380 correct_predictions 1906 unknown_predictions 32 accuracy: 80.08403361344538
Invalid Prediction for dataset_evaluate\Person15\person15105-60-30.jpg | Prediction Name - person05
current_samples 2381 correct_predictions 1906 unknown_predictions 32 accuracy: 80.05039899202015
current_samples 2382 correct_predictions 1907 unknown_predictions 32 accuracy: 80.05877413937867
Invalid Prediction for dataset_evaluate\Person15\person15107-60+0.jpg | Prediction Name - person07
current_samples 2383 correct_predictions 1907 unknown_predictions 32 accuracy: 80.0251783466219
Invalid Prediction for dataset_evaluate\Person15\person15108-60+15.jpg | Prediction Name - person11
current_samples 2384 correct_predictions 1907 unknown_predictions 32 accuracy: 79.99161073825503
current_samples 2385 correct_predictions 1908 unknown_predictions 32 accuracy: 80.0
Invalid Prediction for dataset_evaluate\Person15\person15113-60+90.jpg | Prediction Name - person05
current_samples 2386 correct_predictions 1908 unknown_predictions 32 accuracy: 79.96647108130763
current_samples 2387 correct_predictions 1909 unknown_predictions 32 accuracy: 79.97486384583159
current_samples 2388 correct_predictions 1910 unknown_predictions 32 accuracy: 79.98324958123953
current_samples 2389 correct_predictions 1911 unknown_predictions 32 accuracy: 79.99162829635831
current_samples 2390 correct_predictions 1912 unknown_predictions 32 accuracy: 80.0
current_samples 2391 correct_predictions 1913 unknown_predictions 32 accuracy: 80.00836470096195
Invalid Prediction for dataset_evaluate\Person15\person15119-30-15.jpg | Prediction Name - person05
current_samples 2392 correct_predictions 1913 unknown_predictions 32 accuracy: 79.97491638795987
current_samples 2393 correct_predictions 1914 unknown_predictions 32 accuracy: 79.98328458002507
current_samples 2394 correct_predictions 1915 unknown_predictions 32 accuracy: 79.99164578111947
current_samples 2395 correct_predictions 1916 unknown_predictions 32 accuracy: 80.0
Invalid Prediction for dataset_evaluate\Person15\person15127-15-90.jpg | Prediction Name - person14
current_samples 2396 correct_predictions 1916 unknown_predictions 32 accuracy: 79.96661101836395
current_samples 2397 correct_predictions 1917 unknown_predictions 32 accuracy: 79.9749687108886
Invalid Prediction for dataset_evaluate\Person15\person15129-15-60.jpg | Prediction Name - person13
current_samples 2398 correct_predictions 1917 unknown_predictions 32 accuracy: 79.94161801501251
current_samples 2399 correct_predictions 1918 unknown_predictions 32 accuracy: 79.9499791579825
current_samples 2400 correct_predictions 1919 unknown_predictions 32 accuracy: 79.95833333333333
current_samples 2401 correct_predictions 1920 unknown_predictions 32 accuracy: 79.96668054977093
current_samples 2402 correct_predictions 1921 unknown_predictions 32 accuracy: 79.97502081598668
Invalid Prediction for dataset_evaluate\Person15\person15134-15+15.jpg | Prediction Name - person05
current_samples 2403 correct_predictions 1921 unknown_predictions 32 accuracy: 79.9417394923013
Invalid Prediction for dataset_evaluate\Person15\person15135-15+30.jpg | Prediction Name - person13
current_samples 2404 correct_predictions 1921 unknown_predictions 32 accuracy: 79.90848585690516
Invalid Prediction for dataset_evaluate\Person15\person15136-15+45.jpg | Prediction Name - person01
current_samples 2405 correct_predictions 1921 unknown_predictions 32 accuracy: 79.87525987525987
Invalid Prediction for dataset_evaluate\Person15\person15140+0-90.jpg | Prediction Name - person13
current_samples 2406 correct_predictions 1921 unknown_predictions 32 accuracy: 79.84206151288446
current_samples 2407 correct_predictions 1922 unknown_predictions 32 accuracy: 79.85043622766929
Invalid Prediction for dataset_evaluate\Person15\person15142+0-60.jpg | Prediction Name - person07
current_samples 2408 correct_predictions 1922 unknown_predictions 32 accuracy: 79.8172757475083
current_samples 2409 correct_predictions 1923 unknown_predictions 32 accuracy: 79.82565379825654
Invalid Prediction for dataset_evaluate\Person15\person15144+0-30.jpg | Prediction Name - person07
current_samples 2410 correct_predictions 1923 unknown_predictions 32 accuracy: 79.79253112033196
current_samples 2411 correct_predictions 1924 unknown_predictions 32 accuracy: 79.80091248444629
current_samples 2412 correct_predictions 1925 unknown_predictions 32 accuracy: 79.80928689883913
current_samples 2413 correct_predictions 1926 unknown_predictions 32 accuracy: 79.81765437215086
current_samples 2414 correct_predictions 1927 unknown_predictions 32 accuracy: 79.82601491300746
current_samples 2415 correct_predictions 1928 unknown_predictions 32 accuracy: 79.83436853002071
Invalid Prediction for dataset_evaluate\Person15\person15150+0+60.jpg | Prediction Name - person13
current_samples 2416 correct_predictions 1928 unknown_predictions 32 accuracy: 79.80132450331125
current_samples 2417 correct_predictions 1929 unknown_predictions 32 accuracy: 79.80968142325196
Invalid Prediction for dataset_evaluate\Person15\person15152+0+90.jpg | Prediction Name - person13
current_samples 2418 correct_predictions 1929 unknown_predictions 32 accuracy: 79.77667493796527
current_samples 2419 correct_predictions 1930 unknown_predictions 32 accuracy: 79.78503513848698
current_samples 2420 correct_predictions 1931 unknown_predictions 32 accuracy: 79.79338842975207
Invalid Prediction for dataset_evaluate\Person15\person15155+15-60.jpg | Prediction Name - person07
current_samples 2421 correct_predictions 1931 unknown_predictions 32 accuracy: 79.76042957455597
current_samples 2422 correct_predictions 1932 unknown_predictions 32 accuracy: 79.76878612716763
Invalid Prediction for dataset_evaluate\Person15\person15157+15-30.jpg | Prediction Name - person07
current_samples 2423 correct_predictions 1932 unknown_predictions 32 accuracy: 79.7358646306232
current_samples 2424 correct_predictions 1933 unknown_predictions 32 accuracy: 79.74422442244224
current_samples 2425 correct_predictions 1934 unknown_predictions 32 accuracy: 79.75257731958763
Invalid Prediction for dataset_evaluate\Person15\person15160+15+15.jpg | Prediction Name - person13
current_samples 2426 correct_predictions 1934 unknown_predictions 32 accuracy: 79.719703215169
current_samples 2427 correct_predictions 1935 unknown_predictions 32 accuracy: 79.72805933250928
Invalid Prediction for dataset_evaluate\Person15\person15162+15+45.jpg | Prediction Name - person07
current_samples 2428 correct_predictions 1935 unknown_predictions 32 accuracy: 79.69522240527182
current_samples 2429 correct_predictions 1936 unknown_predictions 32 accuracy: 79.70358172087279
Invalid Prediction for dataset_evaluate\Person15\person15164+15+75.jpg | Prediction Name - person09
current_samples 2430 correct_predictions 1936 unknown_predictions 32 accuracy: 79.67078189300412
current_samples 2431 correct_predictions 1937 unknown_predictions 32 accuracy: 79.67914438502673
Invalid Prediction for dataset_evaluate\Person15\person15166+30-90.jpg | Prediction Name - person13
current_samples 2432 correct_predictions 1937 unknown_predictions 32 accuracy: 79.64638157894737
Invalid Prediction for dataset_evaluate\Person15\person15167+30-75.jpg | Prediction Name - person09
current_samples 2433 correct_predictions 1937 unknown_predictions 32 accuracy: 79.61364570489108
current_samples 2434 correct_predictions 1938 unknown_predictions 32 accuracy: 79.62202136400987
current_samples 2435 correct_predictions 1939 unknown_predictions 32 accuracy: 79.63039014373716
current_samples 2436 correct_predictions 1940 unknown_predictions 32 accuracy: 79.63875205254516
Invalid Prediction for dataset_evaluate\Person15\person15171+30-15.jpg | Prediction Name - person14
current_samples 2437 correct_predictions 1940 unknown_predictions 32 accuracy: 79.60607304062371
current_samples 2438 correct_predictions 1941 unknown_predictions 32 accuracy: 79.61443806398687
current_samples 2439 correct_predictions 1942 unknown_predictions 32 accuracy: 79.62279622796228
Invalid Prediction for dataset_evaluate\Person15\person15174+30+30.jpg | Prediction Name - person13
current_samples 2440 correct_predictions 1942 unknown_predictions 32 accuracy: 79.59016393442623
current_samples 2441 correct_predictions 1943 unknown_predictions 32 accuracy: 79.59852519459238
Invalid Prediction for dataset_evaluate\Person15\person15176+30+60.jpg | Prediction Name - person09
current_samples 2442 correct_predictions 1943 unknown_predictions 32 accuracy: 79.56592956592957
current_samples 2443 correct_predictions 1944 unknown_predictions 32 accuracy: 79.57429390094146
Invalid Prediction for dataset_evaluate\Person15\person15178+30+90.jpg | Prediction Name - person13
current_samples 2444 correct_predictions 1944 unknown_predictions 32 accuracy: 79.54173486088379
Invalid Prediction for dataset_evaluate\Person15\person15179+60-90.jpg | Prediction Name - person13
current_samples 2445 correct_predictions 1944 unknown_predictions 32 accuracy: 79.50920245398773
current_samples 2446 correct_predictions 1945 unknown_predictions 32 accuracy: 79.51757972199509
Invalid Prediction for dataset_evaluate\Person15\person15181+60-60.jpg | Prediction Name - person14
current_samples 2447 correct_predictions 1945 unknown_predictions 32 accuracy: 79.4850837760523
current_samples 2448 correct_predictions 1946 unknown_predictions 32 accuracy: 79.49346405228758
Invalid Prediction for dataset_evaluate\Person15\person15183+60-30.jpg | Prediction Name - person07
current_samples 2449 correct_predictions 1946 unknown_predictions 32 accuracy: 79.46100449162924
current_samples 2450 correct_predictions 1947 unknown_predictions 32 accuracy: 79.46938775510203
Invalid Prediction for dataset_evaluate\Person15\person15185+60+0.jpg | Prediction Name - person14
current_samples 2451 correct_predictions 1947 unknown_predictions 32 accuracy: 79.43696450428396
Invalid Prediction for dataset_evaluate\Person15\person15186+60+15.jpg | Prediction Name - person11
current_samples 2452 correct_predictions 1947 unknown_predictions 32 accuracy: 79.40456769983687
current_samples 2453 correct_predictions 1948 unknown_predictions 32 accuracy: 79.41296371789646
Invalid Prediction for dataset_evaluate\Person15\person15188+60+45.jpg | Prediction Name - person13
current_samples 2454 correct_predictions 1948 unknown_predictions 32 accuracy: 79.38060309698452
Invalid Prediction for dataset_evaluate\Person15\person15189+60+60.jpg | Prediction Name - person13
current_samples 2455 correct_predictions 1948 unknown_predictions 32 accuracy: 79.34826883910388
current_samples 2456 correct_predictions 1949 unknown_predictions 32 accuracy: 79.35667752442997
current_samples 2457 correct_predictions 1950 unknown_predictions 32 accuracy: 79.36507936507937
Invalid Prediction for dataset_evaluate\Person15\person15201-60-90.jpg | Prediction Name - person10
current_samples 2458 correct_predictions 1950 unknown_predictions 32 accuracy: 79.33279088689991
current_samples 2459 correct_predictions 1951 unknown_predictions 32 accuracy: 79.34119560797072
current_samples 2460 correct_predictions 1952 unknown_predictions 32 accuracy: 79.34959349593495
current_samples 2461 correct_predictions 1953 unknown_predictions 32 accuracy: 79.35798455912231
current_samples 2462 correct_predictions 1954 unknown_predictions 32 accuracy: 79.36636880584891
current_samples 2463 correct_predictions 1955 unknown_predictions 32 accuracy: 79.37474624441738
current_samples 2464 correct_predictions 1956 unknown_predictions 32 accuracy: 79.38311688311688
current_samples 2465 correct_predictions 1957 unknown_predictions 32 accuracy: 79.39148073022312
current_samples 2466 correct_predictions 1958 unknown_predictions 32 accuracy: 79.39983779399837
Invalid Prediction for dataset_evaluate\Person15\person15212-60+75.jpg | Prediction Name - person11
current_samples 2467 correct_predictions 1958 unknown_predictions 32 accuracy: 79.36765301986219
Invalid Prediction for dataset_evaluate\Person15\person15214-30-90.jpg | Prediction Name - person07
current_samples 2468 correct_predictions 1958 unknown_predictions 32 accuracy: 79.33549432739059
current_samples 2469 correct_predictions 1959 unknown_predictions 32 accuracy: 79.34386391251519
Invalid Prediction for dataset_evaluate\Person15\person15216-30-60.jpg | Prediction Name - person13
current_samples 2470 correct_predictions 1959 unknown_predictions 32 accuracy: 79.31174089068826
current_samples 2471 correct_predictions 1960 unknown_predictions 32 accuracy: 79.3201133144476
current_samples 2472 correct_predictions 1961 unknown_predictions 32 accuracy: 79.3284789644013
current_samples 2473 correct_predictions 1962 unknown_predictions 32 accuracy: 79.33683784876668
Invalid Prediction for dataset_evaluate\Person15\person15220-30+0.jpg | Prediction Name - person05
current_samples 2474 correct_predictions 1962 unknown_predictions 32 accuracy: 79.30476960388036
current_samples 2475 correct_predictions 1963 unknown_predictions 32 accuracy: 79.31313131313131
current_samples 2476 correct_predictions 1964 unknown_predictions 32 accuracy: 79.32148626817448
current_samples 2477 correct_predictions 1965 unknown_predictions 32 accuracy: 79.32983447719015
Invalid Prediction for dataset_evaluate\Person15\person15224-30+60.jpg | Prediction Name - person11
current_samples 2478 correct_predictions 1965 unknown_predictions 32 accuracy: 79.29782082324455
Invalid Prediction for dataset_evaluate\Person15\person15225-30+75.jpg | Prediction Name - person07
current_samples 2479 correct_predictions 1965 unknown_predictions 32 accuracy: 79.26583299717628
current_samples 2480 correct_predictions 1966 unknown_predictions 32 accuracy: 79.27419354838709
current_samples 2481 correct_predictions 1967 unknown_predictions 32 accuracy: 79.2825473599355
current_samples 2482 correct_predictions 1968 unknown_predictions 32 accuracy: 79.29089443996776
current_samples 2483 correct_predictions 1969 unknown_predictions 32 accuracy: 79.29923479661699
current_samples 2484 correct_predictions 1970 unknown_predictions 32 accuracy: 79.30756843800322
current_samples 2485 correct_predictions 1971 unknown_predictions 32 accuracy: 79.3158953722334
current_samples 2486 correct_predictions 1972 unknown_predictions 32 accuracy: 79.32421560740146
current_samples 2487 correct_predictions 1973 unknown_predictions 32 accuracy: 79.33252915158826
current_samples 2488 correct_predictions 1974 unknown_predictions 32 accuracy: 79.34083601286174
Invalid Prediction for dataset_evaluate\Person15\person15236-15+45.jpg | Prediction Name - person13
current_samples 2489 correct_predictions 1974 unknown_predictions 32 accuracy: 79.30895942145439
Invalid Prediction for dataset_evaluate\Person15\person15238-15+75.jpg | Prediction Name - person09
current_samples 2490 correct_predictions 1974 unknown_predictions 32 accuracy: 79.27710843373494
current_samples 2491 correct_predictions 1975 unknown_predictions 32 accuracy: 79.28542753914091
current_samples 2492 correct_predictions 1976 unknown_predictions 32 accuracy: 79.29373996789727
Invalid Prediction for dataset_evaluate\Person15\person15241+0-75.jpg | Prediction Name - person10
current_samples 2493 correct_predictions 1976 unknown_predictions 32 accuracy: 79.26193341355795
current_samples 2494 correct_predictions 1977 unknown_predictions 32 accuracy: 79.27024859663192
current_samples 2495 correct_predictions 1978 unknown_predictions 32 accuracy: 79.27855711422845
Invalid Prediction for dataset_evaluate\Person15\person15244+0-30.jpg | Prediction Name - person07
current_samples 2496 correct_predictions 1978 unknown_predictions 32 accuracy: 79.24679487179486
Invalid Prediction for dataset_evaluate\Person15\person15245+0-15.jpg | Prediction Name - person09
current_samples 2497 correct_predictions 1978 unknown_predictions 32 accuracy: 79.21505806968362
current_samples 2498 correct_predictions 1979 unknown_predictions 32 accuracy: 79.22337870296236
Invalid Prediction for dataset_evaluate\Person15\person15247+0+15.jpg | Prediction Name - person09
current_samples 2499 correct_predictions 1979 unknown_predictions 32 accuracy: 79.19167667066827
Invalid Prediction for dataset_evaluate\Person15\person15248+0+30.jpg | Prediction Name - person13
current_samples 2500 correct_predictions 1979 unknown_predictions 32 accuracy: 79.16
current_samples 2501 correct_predictions 1980 unknown_predictions 32 accuracy: 79.16833266693322
current_samples 2502 correct_predictions 1981 unknown_predictions 32 accuracy: 79.17665867306155
Invalid Prediction for dataset_evaluate\Person15\person15251+0+75.jpg | Prediction Name - person14
current_samples 2503 correct_predictions 1981 unknown_predictions 32 accuracy: 79.14502596883739
current_samples 2504 correct_predictions 1982 unknown_predictions 32 accuracy: 79.15335463258786
current_samples 2505 correct_predictions 1983 unknown_predictions 32 accuracy: 79.1616766467066
current_samples 2506 correct_predictions 1984 unknown_predictions 32 accuracy: 79.16999201915404
current_samples 2507 correct_predictions 1985 unknown_predictions 32 accuracy: 79.17830075787793
current_samples 2508 correct_predictions 1986 unknown_predictions 32 accuracy: 79.18660287081339
current_samples 2509 correct_predictions 1987 unknown_predictions 32 accuracy: 79.19489836588282
current_samples 2510 correct_predictions 1988 unknown_predictions 32 accuracy: 79.20318725099602
Invalid Prediction for dataset_evaluate\Person15\person15259+15+0.jpg | Prediction Name - person13
current_samples 2511 correct_predictions 1988 unknown_predictions 32 accuracy: 79.17164476304262
current_samples 2512 correct_predictions 1989 unknown_predictions 32 accuracy: 79.17993630573248
Invalid Prediction for dataset_evaluate\Person15\person15261+15+30.jpg | Prediction Name - person13
current_samples 2513 correct_predictions 1989 unknown_predictions 32 accuracy: 79.1484281734978
current_samples 2514 correct_predictions 1990 unknown_predictions 32 accuracy: 79.15672235481304
current_samples 2515 correct_predictions 1991 unknown_predictions 32 accuracy: 79.16500994035786
Invalid Prediction for dataset_evaluate\Person15\person15264+15+75.jpg | Prediction Name - person07
current_samples 2516 correct_predictions 1991 unknown_predictions 32 accuracy: 79.13354531001589
current_samples 2517 correct_predictions 1992 unknown_predictions 32 accuracy: 79.14183551847438
Invalid Prediction for dataset_evaluate\Person15\person15266+30-90.jpg | Prediction Name - person14
current_samples 2518 correct_predictions 1992 unknown_predictions 32 accuracy: 79.11040508339953
current_samples 2519 correct_predictions 1993 unknown_predictions 32 accuracy: 79.11869789599048
current_samples 2520 correct_predictions 1994 unknown_predictions 32 accuracy: 79.12698412698413
Invalid Prediction for dataset_evaluate\Person15\person15269+30-45.jpg | Prediction Name - person14
current_samples 2521 correct_predictions 1994 unknown_predictions 32 accuracy: 79.09559698532328
Invalid Prediction for dataset_evaluate\Person15\person15270+30-30.jpg | Prediction Name - person14
current_samples 2522 correct_predictions 1994 unknown_predictions 32 accuracy: 79.06423473433783
current_samples 2523 correct_predictions 1995 unknown_predictions 32 accuracy: 79.07253269916765
current_samples 2524 correct_predictions 1996 unknown_predictions 32 accuracy: 79.08082408874802
current_samples 2525 correct_predictions 1997 unknown_predictions 32 accuracy: 79.0891089108911
current_samples 2526 correct_predictions 1998 unknown_predictions 32 accuracy: 79.09738717339667
current_samples 2527 correct_predictions 1999 unknown_predictions 32 accuracy: 79.10565888405223
current_samples 2528 correct_predictions 2000 unknown_predictions 32 accuracy: 79.11392405063292
current_samples 2529 correct_predictions 2001 unknown_predictions 32 accuracy: 79.12218268090155
current_samples 2530 correct_predictions 2002 unknown_predictions 32 accuracy: 79.13043478260869
current_samples 2531 correct_predictions 2003 unknown_predictions 32 accuracy: 79.13868036349268
Invalid Prediction for dataset_evaluate\Person15\person15280+60-75.jpg | Prediction Name - person13
current_samples 2532 correct_predictions 2003 unknown_predictions 32 accuracy: 79.10742496050554
current_samples 2533 correct_predictions 2004 unknown_predictions 32 accuracy: 79.11567311488353
Invalid Prediction for dataset_evaluate\Person15\person15282+60-45.jpg | Prediction Name - person07
current_samples 2534 correct_predictions 2004 unknown_predictions 32 accuracy: 79.08445146014206
current_samples 2535 correct_predictions 2005 unknown_predictions 32 accuracy: 79.09270216962526
current_samples 2536 correct_predictions 2006 unknown_predictions 32 accuracy: 79.10094637223975
current_samples 2537 correct_predictions 2007 unknown_predictions 32 accuracy: 79.10918407567993
current_samples 2538 correct_predictions 2008 unknown_predictions 32 accuracy: 79.11741528762806
current_samples 2539 correct_predictions 2009 unknown_predictions 32 accuracy: 79.12564001575424
current_samples 2540 correct_predictions 2010 unknown_predictions 32 accuracy: 79.13385826771653
current_samples 2541 correct_predictions 2011 unknown_predictions 32 accuracy: 79.14207005116096
Invalid Prediction for dataset_evaluate\Person15\person15290+60+75.jpg | Prediction Name - person13
current_samples 2542 correct_predictions 2011 unknown_predictions 32 accuracy: 79.11093627065303
Invalid Prediction for dataset_evaluate\Person15\person15291+60+90.jpg | Prediction Name - person09
current_samples 2543 correct_predictions 2011 unknown_predictions 32 accuracy: 79.07982697601258
Invalid Prediction for dataset_evaluate\Person15\person15292+90+0.jpg | Prediction Name - person11
current_samples 2544 correct_predictions 2011 unknown_predictions 32 accuracy: 79.04874213836479
total_samples: 2544
correct_predictions: 2011
unknown_predictions: 32
accuracy: 79.04874213836479
```