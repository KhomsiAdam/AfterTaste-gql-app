import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  ObjectId: any;
};

export type Admin = {
  __typename?: 'Admin';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role?: Maybe<Auth>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminBy = {
  __typename?: 'AdminBy';
  entity: Admin;
};

export type AdminDeleted = {
  __typename?: 'AdminDeleted';
  entity: Admin;
  message: Scalars['String'];
};

export type AdminDeletedResult = AdminDeleted | AdminNotFound;

export type AdminNotFound = {
  __typename?: 'AdminNotFound';
  message: Scalars['String'];
};

export type AdminResult = AdminBy | AdminNotFound;

export type AdminUpdated = {
  __typename?: 'AdminUpdated';
  entity: Admin;
  message: Scalars['String'];
};

export type AdminUpdatedInput = {
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type AdminUpdatedResult = AdminNotFound | AdminUpdated;

export type Admins = {
  __typename?: 'Admins';
  entities: Array<Admin>;
};

export type AdminsResult = AdminNotFound | Admins;

export type Auth = {
  __typename?: 'Auth';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AuthError = {
  __typename?: 'AuthError';
  message: Scalars['String'];
};

export type FilterCondition = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
};

export type FilterInput = {
  content?: InputMaybe<FilterCondition>;
  title?: InputMaybe<FilterCondition>;
};

export type Login = {
  __typename?: 'Login';
  message: Scalars['String'];
  role: Scalars['String'];
  token: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResult = AuthError | Login;

export type Logout = {
  __typename?: 'Logout';
  message: Scalars['String'];
};

export type LogoutResult = AuthError | Logout;

export type Menu = {
  __typename?: 'Menu';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Product>>>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MenuBy = {
  __typename?: 'MenuBy';
  entity: Menu;
};

export type MenuCreated = {
  __typename?: 'MenuCreated';
  entity: Menu;
  message: Scalars['String'];
};

export type MenuCreatedInput = {
  name: Scalars['String'];
  products: Array<InputMaybe<Scalars['ObjectId']>>;
};

export type MenuCreatedResult = MenuCreated | MenuNotFound;

export type MenuNotFound = {
  __typename?: 'MenuNotFound';
  message: Scalars['String'];
};

export type MenuRemoved = {
  __typename?: 'MenuRemoved';
  entity: Menu;
  message: Scalars['String'];
};

export type MenuRemovedResult = MenuNotFound | MenuRemoved;

export type MenuResult = MenuBy | MenuNotFound;

export type MenuUpdated = {
  __typename?: 'MenuUpdated';
  entity: Menu;
  message: Scalars['String'];
};

export type MenuUpdatedInput = {
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
};

export type MenuUpdatedResult = MenuNotFound | MenuUpdated;

export type Menus = {
  __typename?: 'Menus';
  entities: Array<Menu>;
};

export type MenusResult = MenuNotFound | Menus;

export type Mutation = {
  __typename?: 'Mutation';
  createMenu: MenuCreatedResult;
  createOrder: OrderCreatedResult;
  createProduct: ProductCreatedResult;
  deleteAdmin: AdminDeletedResult;
  deleteUser: UserDeletedResult;
  login: LoginResult;
  logout: LogoutResult;
  refresh: RefreshResult;
  register: RegisterResult;
  removeMenu: MenuRemovedResult;
  removeOrder: OrderRemovedResult;
  removeProduct: ProductRemovedResult;
  updateAdmin: AdminUpdatedResult;
  updateMenu: MenuUpdatedResult;
  updateOrder: OrderUpdatedResult;
  updateProduct: ProductUpdatedResult;
  updateUser: UserUpdatedResult;
};


export type MutationCreateMenuArgs = {
  input: MenuCreatedInput;
};


export type MutationCreateOrderArgs = {
  input: OrderCreatedInput;
};


export type MutationCreateProductArgs = {
  input: ProductCreatedInput;
};


export type MutationDeleteAdminArgs = {
  id: Scalars['ObjectId'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ObjectId'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRemoveMenuArgs = {
  id: Scalars['ObjectId'];
};


export type MutationRemoveOrderArgs = {
  id: Scalars['ObjectId'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ObjectId'];
};


export type MutationUpdateAdminArgs = {
  id: Scalars['ObjectId'];
  input: AdminUpdatedInput;
};


export type MutationUpdateMenuArgs = {
  id: Scalars['ObjectId'];
  input: MenuUpdatedInput;
};


export type MutationUpdateOrderArgs = {
  id: Scalars['ObjectId'];
  input: OrderUpdatedInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ObjectId'];
  input: ProductUpdatedInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ObjectId'];
  input: UserUpdatedInput;
};

export type Order = {
  __typename?: 'Order';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  menus?: Maybe<Array<Maybe<Menu>>>;
  menusQuantity?: Maybe<Array<Maybe<Scalars['Int']>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  productsQuantity?: Maybe<Array<Maybe<Scalars['Int']>>>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
};

export type OrderBy = {
  __typename?: 'OrderBy';
  entity: Order;
};

export type OrderCreated = {
  __typename?: 'OrderCreated';
  entity: Order;
  message: Scalars['String'];
};

export type OrderCreatedInput = {
  menus?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  menusQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  productsQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  user: Scalars['ObjectId'];
};

export type OrderCreatedResult = OrderCreated | OrderNotFound;

export type OrderNotFound = {
  __typename?: 'OrderNotFound';
  message: Scalars['String'];
};

export type OrderRemoved = {
  __typename?: 'OrderRemoved';
  entity: Order;
  message: Scalars['String'];
};

export type OrderRemovedResult = OrderNotFound | OrderRemoved;

export type OrderResult = OrderBy | OrderNotFound;

export type OrderUpdated = {
  __typename?: 'OrderUpdated';
  entity: Order;
  message: Scalars['String'];
};

export type OrderUpdatedInput = {
  menus?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  menusQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ObjectId']>>>;
  productsQuantity?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  user?: InputMaybe<Scalars['ObjectId']>;
};

export type OrderUpdatedResult = OrderNotFound | OrderUpdated;

export type Orders = {
  __typename?: 'Orders';
  entities: Array<Order>;
};

export type OrdersResult = OrderNotFound | Orders;

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type Product = {
  __typename?: 'Product';
  _id?: Maybe<Scalars['ObjectId']>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductBy = {
  __typename?: 'ProductBy';
  entity: Product;
};

export type ProductCreated = {
  __typename?: 'ProductCreated';
  entity: Product;
  message: Scalars['String'];
};

export type ProductCreatedInput = {
  category: Scalars['String'];
  description: Scalars['String'];
  images: Array<InputMaybe<Scalars['String']>>;
  name: Scalars['String'];
  price: Scalars['Float'];
};

export type ProductCreatedResult = ProductCreated | ProductNotFound;

export type ProductNotFound = {
  __typename?: 'ProductNotFound';
  message: Scalars['String'];
};

export type ProductRemoved = {
  __typename?: 'ProductRemoved';
  entity: Product;
  message: Scalars['String'];
};

export type ProductRemovedResult = ProductNotFound | ProductRemoved;

export type ProductResult = ProductBy | ProductNotFound;

export type ProductUpdated = {
  __typename?: 'ProductUpdated';
  entity: Product;
  message: Scalars['String'];
};

export type ProductUpdatedInput = {
  category?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
};

export type ProductUpdatedResult = ProductNotFound | ProductUpdated;

export type Products = {
  __typename?: 'Products';
  entities: Array<Product>;
};

export type ProductsResult = ProductNotFound | Products;

export type Query = {
  __typename?: 'Query';
  getAdminByField: AdminResult;
  getAdminById: AdminResult;
  getAllAdmins: AdminsResult;
  getAllMenus: MenusResult;
  getAllOrders: OrdersResult;
  getAllProducts: ProductsResult;
  getAllUsers: UsersResult;
  getMenuByField: MenuResult;
  getMenuById: MenuResult;
  getOrderByField: OrderResult;
  getOrderById: OrderResult;
  getProductByField: ProductResult;
  getProductById: ProductResult;
  getUserByField: UserResult;
  getUserById: UserResult;
};


export type QueryGetAdminByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetAdminByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetAllAdminsArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllMenusArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllOrdersArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllProductsArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetAllUsersArgs = {
  filter?: InputMaybe<FilterInput>;
  paginate?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortInput>;
};


export type QueryGetMenuByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetMenuByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetOrderByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetOrderByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetProductByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetProductByIdArgs = {
  id: Scalars['ObjectId'];
};


export type QueryGetUserByFieldArgs = {
  field: Scalars['String'];
  value: Scalars['String'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ObjectId'];
};

export type Refresh = {
  __typename?: 'Refresh';
  message: Scalars['String'];
  role: Scalars['String'];
  token: Scalars['String'];
};

export type RefreshResult = AuthError | Refresh;

export type Register = {
  __typename?: 'Register';
  message: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  role?: InputMaybe<Scalars['String']>;
};

export type RegisterResult = AuthError | Register;

export type SortInput = {
  field?: InputMaybe<SortableField>;
  order?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export enum SortableField {
  CreatedAt = 'createdAt'
}

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  fidelity?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  role?: Maybe<Auth>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserBy = {
  __typename?: 'UserBy';
  entity: User;
};

export type UserDeleted = {
  __typename?: 'UserDeleted';
  entity: User;
  message: Scalars['String'];
};

export type UserDeletedResult = UserDeleted | UserNotFound;

export type UserNotFound = {
  __typename?: 'UserNotFound';
  message: Scalars['String'];
};

export type UserResult = UserBy | UserNotFound;

export type UserUpdated = {
  __typename?: 'UserUpdated';
  entity: User;
  message: Scalars['String'];
};

export type UserUpdatedInput = {
  fidelity?: InputMaybe<Scalars['Int']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type UserUpdatedResult = UserNotFound | UserUpdated;

export type Users = {
  __typename?: 'Users';
  entities: Array<User>;
};

export type UsersResult = UserNotFound | Users;

export type ProductFragment = { __typename?: 'Product', _id?: any | null, name?: string | null, category?: string | null, description?: string | null, images?: Array<string | null> | null, price?: number | null, createdAt?: any | null };

export type UserFragment = { __typename?: 'User', _id?: any | null, firstname?: string | null, lastname?: string | null, email?: string | null, fidelity?: number | null };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthError', message: string } | { __typename?: 'Login', token: string, role: string, message: string } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'AuthError', message: string } | { __typename?: 'Logout', message: string } };

export type RefreshMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshMutation = { __typename?: 'Mutation', refresh: { __typename?: 'AuthError', message: string } | { __typename?: 'Refresh', token: string, role: string, message: string } };

export type GetAllMenusQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMenusQuery = { __typename?: 'Query', getAllMenus: { __typename?: 'MenuNotFound', message: string } | { __typename?: 'Menus', entities: Array<{ __typename?: 'Menu', _id?: any | null, name?: string | null, createdAt?: any | null, products?: Array<{ __typename?: 'Product', _id?: any | null, name?: string | null, category?: string | null, description?: string | null, images?: Array<string | null> | null, price?: number | null, createdAt?: any | null } | null> | null }> } };

export type GetAllOrdersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOrdersQuery = { __typename?: 'Query', getAllOrders: { __typename?: 'OrderNotFound' } | { __typename?: 'Orders', entities: Array<{ __typename?: 'Order', _id?: any | null, productsQuantity?: Array<number | null> | null, menusQuantity?: Array<number | null> | null, status?: string | null, createdAt?: any | null, user?: { __typename?: 'User', _id?: any | null, firstname?: string | null, lastname?: string | null, email?: string | null, fidelity?: number | null } | null, products?: Array<{ __typename?: 'Product', _id?: any | null, name?: string | null, category?: string | null, description?: string | null, images?: Array<string | null> | null, price?: number | null, createdAt?: any | null } | null> | null, menus?: Array<{ __typename?: 'Menu', _id?: any | null, name?: string | null, createdAt?: any | null, products?: Array<{ __typename?: 'Product', _id?: any | null, name?: string | null, category?: string | null, description?: string | null, images?: Array<string | null> | null, price?: number | null, createdAt?: any | null } | null> | null } | null> | null }> } };

export type GetAllProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { __typename?: 'Query', getAllProducts: { __typename?: 'ProductNotFound', message: string } | { __typename?: 'Products', entities: Array<{ __typename?: 'Product', _id?: any | null, name?: string | null, category?: string | null, description?: string | null, images?: Array<string | null> | null, price?: number | null, createdAt?: any | null }> } };

export const ProductFragmentDoc = gql`
    fragment product on Product {
  _id
  name
  category
  description
  images
  price
  createdAt
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  _id
  firstname
  lastname
  email
  fidelity
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    ... on Login {
      token
      role
      message
    }
    ... on AuthError {
      message
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    ... on Logout {
      message
    }
    ... on AuthError {
      message
    }
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshDocument = gql`
    mutation Refresh {
  refresh {
    ... on Refresh {
      token
      role
      message
    }
    ... on AuthError {
      message
    }
  }
}
    `;
export type RefreshMutationFn = Apollo.MutationFunction<RefreshMutation, RefreshMutationVariables>;

/**
 * __useRefreshMutation__
 *
 * To run a mutation, you first call `useRefreshMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshMutation, { data, loading, error }] = useRefreshMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshMutation(baseOptions?: Apollo.MutationHookOptions<RefreshMutation, RefreshMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshMutation, RefreshMutationVariables>(RefreshDocument, options);
      }
export type RefreshMutationHookResult = ReturnType<typeof useRefreshMutation>;
export type RefreshMutationResult = Apollo.MutationResult<RefreshMutation>;
export type RefreshMutationOptions = Apollo.BaseMutationOptions<RefreshMutation, RefreshMutationVariables>;
export const GetAllMenusDocument = gql`
    query GetAllMenus {
  getAllMenus {
    ... on MenuNotFound {
      message
    }
    ... on Menus {
      entities {
        _id
        name
        createdAt
        products {
          ...product
        }
      }
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetAllMenusQuery__
 *
 * To run a query within a React component, call `useGetAllMenusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMenusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMenusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMenusQuery(baseOptions?: Apollo.QueryHookOptions<GetAllMenusQuery, GetAllMenusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllMenusQuery, GetAllMenusQueryVariables>(GetAllMenusDocument, options);
      }
export function useGetAllMenusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllMenusQuery, GetAllMenusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllMenusQuery, GetAllMenusQueryVariables>(GetAllMenusDocument, options);
        }
export type GetAllMenusQueryHookResult = ReturnType<typeof useGetAllMenusQuery>;
export type GetAllMenusLazyQueryHookResult = ReturnType<typeof useGetAllMenusLazyQuery>;
export type GetAllMenusQueryResult = Apollo.QueryResult<GetAllMenusQuery, GetAllMenusQueryVariables>;
export const GetAllOrdersDocument = gql`
    query GetAllOrders {
  getAllOrders {
    ... on Orders {
      entities {
        _id
        user {
          ...user
        }
        products {
          ...product
        }
        productsQuantity
        menus {
          _id
          name
          products {
            ...product
          }
          createdAt
        }
        menusQuantity
        status
        createdAt
      }
    }
  }
}
    ${UserFragmentDoc}
${ProductFragmentDoc}`;

/**
 * __useGetAllOrdersQuery__
 *
 * To run a query within a React component, call `useGetAllOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllOrdersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options);
      }
export function useGetAllOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllOrdersQuery, GetAllOrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllOrdersQuery, GetAllOrdersQueryVariables>(GetAllOrdersDocument, options);
        }
export type GetAllOrdersQueryHookResult = ReturnType<typeof useGetAllOrdersQuery>;
export type GetAllOrdersLazyQueryHookResult = ReturnType<typeof useGetAllOrdersLazyQuery>;
export type GetAllOrdersQueryResult = Apollo.QueryResult<GetAllOrdersQuery, GetAllOrdersQueryVariables>;
export const GetAllProductsDocument = gql`
    query GetAllProducts {
  getAllProducts {
    ... on ProductNotFound {
      message
    }
    ... on Products {
      entities {
        ...product
      }
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetAllProductsQuery__
 *
 * To run a query within a React component, call `useGetAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
      }
export function useGetAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductsQuery, GetAllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllProductsQuery, GetAllProductsQueryVariables>(GetAllProductsDocument, options);
        }
export type GetAllProductsQueryHookResult = ReturnType<typeof useGetAllProductsQuery>;
export type GetAllProductsLazyQueryHookResult = ReturnType<typeof useGetAllProductsLazyQuery>;
export type GetAllProductsQueryResult = Apollo.QueryResult<GetAllProductsQuery, GetAllProductsQueryVariables>;