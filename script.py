import sys

import numpy as np
import pandas as pd

arg1 = sys.argv[1]
arg2 = sys.argv[2]
arg3 = sys.argv[3]
arg4 = sys.argv[4]
arg5 = sys.argv[5]
arg6 = sys.argv[6]
arg7 = sys.argv[7]
arg8 = sys.argv[8]



url = "Prostate_Cancer.csv"


dataset = pd.read_csv(url)


X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, 8].values


from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, train_size=0.8)


from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
scaler.fit(X_train)

X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)


from sklearn.neighbors import KNeighborsClassifier
classifier = KNeighborsClassifier(n_neighbors=5)
classifier.fit(X_train, y_train)




new_example = np.array([[arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8]])

scaled_example = scaler.transform(new_example)

predicted_class = classifier.predict(scaled_example)

print(predicted_class)
