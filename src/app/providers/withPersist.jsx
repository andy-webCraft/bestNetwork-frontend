import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "app/store";
import Loader from "shared/ui/Loader";

const withPersist = (component) => function PersistProvider() {
  return (
    <PersistGate loading={<Loader />} persistor={persistStore(store)}>
      {component()}
    </PersistGate>
  );
};

export default withPersist;
