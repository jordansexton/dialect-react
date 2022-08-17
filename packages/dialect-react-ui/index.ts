import 'focus-visible'; // https://css-tricks.com/keyboard-only-focus-styles/
import Chat from './components/Chat';
import ChatButton from './components/ChatButton';
import BottomChat from './components/BottomChat';
import Notifications from './components/Notifications';
import NotificationsButton from './components/NotificationsButton';
import NotificationsModal from './components/NotificationsModal';
import Inbox from './components/Inbox';
import useDappAudience from './hooks/useDappAudience';
import useBalance from './hooks/useBalance';

import Broadcast, {
  UnwrappedBroadcastForm as BroadcastForm,
} from './components/Broadcast';

import * as PrimitivesInternal from './components/common/primitives';
import * as Preflighted from './components/common/preflighted';

import {
  defaultVariables,
  DialectThemeProvider,
} from './components/common/providers/DialectThemeProvider';
import {
  DialectUiManagementProvider,
  useDialectUi,
  useDialectUiId,
} from './components/common/providers/DialectUiManagementProvider';
import {
  RouteName as ChatRouteName,
  MainRouteName as ChatMainRouteName,
  ThreadRouteName as ChatThreadRouteName,
} from './components/Chat/constants';

import type {
  ThemeType,
  ThemeIcons,
  ThemeColors,
  ThemeTextStyles,
  IncomingThemeVariables,
  IncomingThemeValues,
} from './components/common/providers/DialectThemeProvider';
import type { ChatNavigationHelpers } from './components/Chat/types';
import type { ChannelCountsType } from './utils/addressesUtils';
import WalletStatesWrapper from './entities/wrappers/WalletStatesWrapper';
import ConnectionWrapper from './entities/wrappers/ConnectionWrapper';
import DashboardWrapper from './entities/wrappers/DashboardWrapper';
import ThreadEncyprionWrapper from './entities/wrappers/ThreadEncryptionWrapper';

import Email from './components/Notifications/screens/NewSettings/Email';
import Sms from './components/Notifications/screens/NewSettings/Sms';
import Telegram from './components/Notifications/screens/NewSettings/Telegram';
import Wallet from './components/Notifications/screens/NewSettings/Wallet';
import { NotificationToggle } from './components/Notifications/screens/Settings';
import { Notification } from './components/Notifications/screens/NotificationsList/Notification';
import ToastMessage from './components/common/ToastMessage';

const ThemeProvider = DialectThemeProvider;

const Primitives = { ...PrimitivesInternal, ...Preflighted, ToastMessage };

export {
  Chat,
  ChatButton,
  BottomChat,
  NotificationsButton,
  NotificationsModal,
  Notifications,
  Inbox,
  defaultVariables,
  ThemeProvider,
  DialectThemeProvider,
  DialectUiManagementProvider,
  useDialectUi,
  useDialectUiId,
  ChatRouteName,
  ChatThreadRouteName,
  ChatMainRouteName,
  Broadcast,
  BroadcastForm,
  // etc for building custom components
  WalletStatesWrapper,
  ConnectionWrapper,
  DashboardWrapper,
  ThreadEncyprionWrapper,
  useDappAudience,
  useBalance,
  // UI components
  Email,
  Sms,
  Telegram,
  Wallet,
  NotificationToggle,
  Notification,
  Primitives,
};

export type {
  ThemeType,
  ThemeIcons,
  ThemeColors,
  ThemeTextStyles,
  IncomingThemeVariables,
  IncomingThemeValues,
  ChatNavigationHelpers,
  ChannelCountsType,
};

export * from '@dialectlabs/react-sdk';
