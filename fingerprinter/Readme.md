# Model 1
- CNN with 2 Fully Connected Layers
- used binary_crossentropy as the loss function
- accuracy stuck at zero

# Model 2
- Full CNN
- Used Adam optimization
- Used Mean absolute error as the loss function
- After first epoch accuracy went to 96% which is highly unlikely to happen. Which means model overfitted or something else went wrong

# Model 3
- CNN with Fully Connected Layers and Batch Normalization
- Used Adam optimization
- Used Mean absolute error as the loss function
- Trained for 100 epochs
- Loss function stopped improving after 66th epoch
- Final val_accuracy: 0.4240
- Final val_loss: 106.6698

Even though accuracy is not good we are headed in the right direction <br>
Starter Model came from https://www.pyimagesearch.com/2020/02/17/autoencoders-with-keras-tensorflow-and-deep-learning/

# Model 4
- Build upon Model 3
- Increased image size
- Increased filter size
- EarlyStopping keras call back kicked in 11th epoch
- Found out dataset was too small

##### Both Model 3 and 4 perform poorly because I forgot to scaled down the input's between 0 and 1 while NN is output's are scaled with sigmoid function and I asked the NN to do something impossible

# Model 5
- Scaled the input's between 0 and 1
    - We need do this because our final model's final layer has sigmoid activation
    - it scaled the output the model output between 0 and 1 this is needed in order have out loss function works properly
```shell script
2498/2498 [==============================] - 37s 15ms/sample - loss: 0.0166 - accuracy: 0.9797 - mae: 0.0166 - val_loss: 0.0909 - val_accuracy: 0.9705 - val_mae: 0.0909
```
Note - I used wrong reshaping mechanisms in pre processing step for the labels although model had good accuracy need to retrain and see if it make real difference