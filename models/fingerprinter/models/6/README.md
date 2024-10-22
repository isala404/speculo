# Model v6
Optimizer - adam (LR - 0.001) <br>
Loss Function - mse <br>
Input Shape - (96, 96, 1) <br>
Filters - (32, 128, 512, 512, 32) <br>
Latent Size - 4096 <br>

### Dataset Sample
![DataSet](img/dataset.png)

## Model Summary
```shell script
Model: "Speculo-v6"
_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
input (InputLayer)           [(None, 96, 96, 1)]       0         
_________________________________________________________________
conv2d_5 (Conv2D)            (None, 96, 96, 32)        320       
_________________________________________________________________
max_pooling2d_5 (MaxPooling2 (None, 48, 48, 32)        0         
_________________________________________________________________
dropout_11 (Dropout)         (None, 48, 48, 32)        0         
_________________________________________________________________
conv2d_6 (Conv2D)            (None, 48, 48, 128)       36992     
_________________________________________________________________
max_pooling2d_6 (MaxPooling2 (None, 24, 24, 128)       0         
_________________________________________________________________
dropout_12 (Dropout)         (None, 24, 24, 128)       0         
_________________________________________________________________
conv2d_7 (Conv2D)            (None, 24, 24, 512)       590336    
_________________________________________________________________
max_pooling2d_7 (MaxPooling2 (None, 12, 12, 512)       0         
_________________________________________________________________
dropout_13 (Dropout)         (None, 12, 12, 512)       0         
_________________________________________________________________
conv2d_8 (Conv2D)            (None, 12, 12, 512)       2359808   
_________________________________________________________________
max_pooling2d_8 (MaxPooling2 (None, 6, 6, 512)         0         
_________________________________________________________________
dropout_14 (Dropout)         (None, 6, 6, 512)         0         
_________________________________________________________________
conv2d_9 (Conv2D)            (None, 6, 6, 32)          147488    
_________________________________________________________________
max_pooling2d_9 (MaxPooling2 (None, 3, 3, 32)          0         
_________________________________________________________________
dropout_15 (Dropout)         (None, 3, 3, 32)          0         
_________________________________________________________________
flatten_1 (Flatten)          (None, 288)               0         
_________________________________________________________________
dropout_16 (Dropout)         (None, 288)               0         
_________________________________________________________________
latent_space (Dense)         (None, 4096)              1183744   
_________________________________________________________________
dense_1 (Dense)              (None, 288)               1179936   
_________________________________________________________________
reshape_1 (Reshape)          (None, 3, 3, 32)          0         
_________________________________________________________________
conv2d_transpose_6 (Conv2DTr (None, 6, 6, 32)          9248      
_________________________________________________________________
batch_normalization_5 (Batch (None, 6, 6, 32)          128       
_________________________________________________________________
dropout_17 (Dropout)         (None, 6, 6, 32)          0         
_________________________________________________________________
conv2d_transpose_7 (Conv2DTr (None, 12, 12, 512)       147968    
_________________________________________________________________
batch_normalization_6 (Batch (None, 12, 12, 512)       2048      
_________________________________________________________________
dropout_18 (Dropout)         (None, 12, 12, 512)       0         
_________________________________________________________________
conv2d_transpose_8 (Conv2DTr (None, 24, 24, 512)       2359808   
_________________________________________________________________
batch_normalization_7 (Batch (None, 24, 24, 512)       2048      
_________________________________________________________________
dropout_19 (Dropout)         (None, 24, 24, 512)       0         
_________________________________________________________________
conv2d_transpose_9 (Conv2DTr (None, 48, 48, 128)       589952    
_________________________________________________________________
batch_normalization_8 (Batch (None, 48, 48, 128)       512       
_________________________________________________________________
dropout_20 (Dropout)         (None, 48, 48, 128)       0         
_________________________________________________________________
conv2d_transpose_10 (Conv2DT (None, 96, 96, 32)        36896     
_________________________________________________________________
batch_normalization_9 (Batch (None, 96, 96, 32)        128       
_________________________________________________________________
dropout_21 (Dropout)         (None, 96, 96, 32)        0         
_________________________________________________________________
conv2d_transpose_11 (Conv2DT (None, 96, 96, 1)         289       
_________________________________________________________________
output (Activation)          (None, 96, 96, 1)         0         
=================================================================
Total params: 8,647,649
Trainable params: 8,645,217
Non-trainable params: 2,432
_________________________________________________________________
```
![Model](img/model.png)

## Training Log
```shell script

```

## Predictions 
![loss](img/predictions.png)

## Notes
- Increased Input size
- Scaled up the model size by increasing filter values