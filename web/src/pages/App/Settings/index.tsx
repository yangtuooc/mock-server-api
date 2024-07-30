import OpenApiSettings from '@/pages/App/Settings/OpenApiSetting';
import EnvironmentSettings from '@/pages/App/Settings/EnvironmentSettings';
import AppScriptSettings from '@/pages/App/Settings/AppScriptSettings';

type ApplicationSettingsProps = {
  appId: string;
}

const ApplicationSettings = ({ appId }: ApplicationSettingsProps) => {
  return (
    <>
      <EnvironmentSettings appId={appId} />
      <AppScriptSettings appId={appId} />
      <OpenApiSettings appId={appId} />
    </>
  );
};

export default ApplicationSettings;